import {
	DropdownMenu,
	Fill,
	Slot,
	ToolbarItem,
	ToolbarButton,
} from '@wordpress/components';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { BlockFormatControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { getProperty } from '@aktk/helper/object';
import { getBlockEditorConfig } from '@aktk/helper/config';
import classnames from 'classnames';
import { Fragment } from '@wordpress/element';
import { Icon, edit } from '@wordpress/icons';
import { yStandardIcon } from '@aktk/components/ystandard-icon';

const buttonTitle = __( '[ys]インラインスタイル', 'ystandard-blocks' );
const SLOT_NAME = 'ystdb.InlineStyle.Items';
const items = getProperty(
	getBlockEditorConfig( 'inlineStyle', {} ),
	'items',
	[]
);
const POPOVER_PROPS = {
	position: 'bottom right',
	isAlternate: true,
};

registerFormatType( 'ystdb/inline-style-items', {
	title: buttonTitle,
	tagName: 'span',
	className: 'ystdb-inline-style-items',
	edit() {
		return (
			<BlockFormatControls>
				<Slot name={ SLOT_NAME }>
					{ ( fills ) => {
						if ( ! fills.length ) {
							return null;
						}
						const allProps = fills.map(
							( [ { props } ] ) => props
						);
						const hasActive = allProps.some(
							( { isActive } ) => isActive
						);
						return (
							<ToolbarItem>
								{ ( toggleProps ) => (
									<DropdownMenu
										icon={ <Icon icon={ yStandardIcon } /> }
										label={ buttonTitle }
										toggleProps={ {
											...toggleProps,
											className: classnames(
												toggleProps.className,
												{ 'is-pressed': hasActive }
											),
										} }
										controls={ fills.map(
											( [ { props } ] ) => props
										) }
										popoverProps={ POPOVER_PROPS }
									/>
								) }
							</ToolbarItem>
						);
					} }
				</Slot>
			</BlockFormatControls>
		);
	},
} );

Object.keys( items ).map( ( key ) => {
	const item = items[ key ];
	const name = `ystdb/inline-style-items-${ key }`;
	const formatClassName = `ystdb-inline--${ key }`;
	if ( ! getProperty( item, 'enable', true ) ) {
		return true;
	}
	registerFormatType( name, {
		title: item.label,
		tagName: 'span',
		className: formatClassName,
		edit( { isActive, value, onChange } ) {
			const onClick = () =>
				onChange(
					toggleFormat( value, {
						type: name,
					} )
				);
			const titleClass = classnames(
				'ystdb-inline-style-items-button',
				formatClassName
			);
			return (
				<Fragment>
					<Fill name={ SLOT_NAME }>
						<ToolbarButton
							title={
								<span className={ titleClass }>
									{ item.label }
								</span>
							}
							icon={ <Icon icon={ edit } /> }
							isActive={ isActive }
							onClick={ onClick }
						/>
					</Fill>
				</Fragment>
			);
		},
	} );
	return true;
} );
