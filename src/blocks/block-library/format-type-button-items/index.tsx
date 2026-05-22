import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { Fill, ToolbarButton } from '@wordpress/components';
import {
	registerFormatType,
	toggleFormat,
	type RichTextValue,
} from '@wordpress/rich-text';
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

const SLOT_NAME = 'ystdb.InlineStyle.Items';

const inlineStyleConfig = getBlockEditorConfig(
	'inlineStyle',
	{}
) as InlineStyleConfig;
const items = inlineStyleConfig?.items ?? {};

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
