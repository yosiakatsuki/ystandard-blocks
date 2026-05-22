import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import {
	DropdownMenu,
	Fill,
	Slot,
	ToolbarButton,
	ToolbarItem,
} from '@wordpress/components';
import {
	registerFormatType,
	toggleFormat,
	type RichTextValue,
} from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';
import { Icon, edit } from '@wordpress/icons';
/**
 * Plugin dependencies
 */
import { getBlockEditorConfig } from '@aktk/blocks/utils';
import './style-editor.scss';

type InlineStyleItem = {
	enable?: boolean;
	label?: string;
};

type InlineStyleConfig = {
	items?: Record< string, InlineStyleItem >;
};

type FormatEditProps = {
	value: RichTextValue;
	isActive: boolean;
	onChange: ( value: RichTextValue ) => void;
};

type InlineStyleControl = {
	title: string;
	children: JSX.Element;
	icon: JSX.Element;
	isActive: boolean;
	onClick: () => void;
};

type InlineStyleFill = [
	{
		props: InlineStyleControl;
	},
];

type ToolbarToggleProps = {
	className?: string;
};

const buttonTitle = __( '[ys]インラインスタイル', 'ystandard-blocks' );
const SLOT_NAME = 'ystdb.InlineStyle.Items';
const RICH_TEXT_TOOLBAR_CONTROLS_NAME = 'RichText.ToolbarControls.bold';
const yStandardIcon = (
	<svg
		role="img"
		focusable="false"
		aria-hidden="true"
		width="24"
		height="24"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		data-icon-name="ystdtb-panel-icon"
	>
		<g>
			<path d="M11.48,17.78c0,.69-.24,1.28-.73,1.77s-1.07,.74-1.77,.74H2.53v-2.4h6.46c.07,0,.11-.04,.11-.11v-1.67H3.28c-.69,0-1.28-.25-1.77-.74-.49-.49-.74-1.08-.74-1.77V5.59H3.15V13.59c0,.08,.04,.13,.13,.13h5.71c.07,0,.11-.04,.11-.13V5.59h2.38v12.19Z" />
			<path d="M23.11,8.06v.45h-2.38v-.45c0-.08-.04-.13-.13-.13h-5.69c-.09,0-.13,.04-.13,.13v1.46c0,.07,.04,.11,.13,.11h5.69c.7,0,1.3,.25,1.78,.74s.73,1.08,.73,1.77v1.46c0,.69-.24,1.28-.73,1.77s-1.08,.74-1.78,.74h-5.69c-.69,0-1.28-.25-1.77-.74s-.74-1.08-.74-1.77v-.46h2.38v.46c0,.08,.04,.13,.13,.13h5.69c.08,0,.13-.04,.13-.13v-1.46c0-.07-.04-.11-.13-.11h-5.69c-.69,0-1.28-.25-1.77-.74s-.74-1.08-.74-1.77v-1.46c0-.69,.25-1.28,.74-1.77s1.08-.74,1.77-.74h5.69c.7,0,1.3,.25,1.78,.74s.73,1.08,.73,1.77Z" />
		</g>
	</svg>
);
const POPOVER_PROPS = {
	position: 'bottom right',
	variant: 'toolbar',
} as const;

const inlineStyleConfig = getBlockEditorConfig(
	'inlineStyle',
	{}
) as InlineStyleConfig;
const items = inlineStyleConfig?.items ?? {};

registerFormatType( 'ystdb/inline-style-items', {
	name: 'ystdb/inline-style-items',
	title: buttonTitle,
	tagName: 'span',
	className: 'ystdb-inline-style-items',
	interactive: false,
	object: false,
	edit() {
		return (
			<Slot name={ SLOT_NAME }>
				{ ( fills: InlineStyleFill[] ) => {
					if ( ! fills.length ) {
						return null;
					}
					const controls = fills.map( ( [ { props } ] ) => ( {
						...props,
						title: props.children,
					} ) );
					const hasActive = controls.some(
						( { isActive } ) => isActive
					);
					return (
						<Fill name={ RICH_TEXT_TOOLBAR_CONTROLS_NAME }>
							<ToolbarItem>
								{ ( toggleProps: ToolbarToggleProps ) => (
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
										controls={ controls as never }
										popoverProps={ POPOVER_PROPS }
									/>
								) }
							</ToolbarItem>
						</Fill>
					);
				} }
			</Slot>
		);
	},
} );

Object.keys( items ).forEach( ( key ) => {
	const item = items[ key ];
	const name = `ystdb/inline-style-items-${ key }`;
	const formatClassName = `ystdb-inline--${ key }`;
	if ( false === item?.enable ) {
		return;
	}
	registerFormatType( name, {
		name,
		title: item?.label ?? key,
		tagName: 'span',
		className: formatClassName,
		interactive: false,
		object: false,
		edit( { isActive, value, onChange }: FormatEditProps ) {
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
				<Fill name={ SLOT_NAME }>
					<ToolbarButton
						title={ item?.label ?? key }
						icon={ <Icon icon={ edit } /> }
						isActive={ isActive }
						onClick={ onClick }
					>
						<span className={ titleClass }>
							{ item?.label ?? key }
						</span>
					</ToolbarButton>
				</Fill>
			);
		},
	} );
} );
