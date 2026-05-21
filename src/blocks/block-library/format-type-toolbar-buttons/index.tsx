import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies
 */
import { getBlockEditorConfig } from '@aktk/blocks/utils';
import './style-editor.scss';

type InlineStyleToolbarButton = {
	enable?: boolean;
};

type InlineStyleConfig = {
	buttons?: InlineStyleToolbarButton[];
};

const inlineStyleConfig = getBlockEditorConfig(
	'inlineStyle',
	{}
) as InlineStyleConfig;
const buttons = inlineStyleConfig?.buttons ?? [];

buttons.forEach( ( button, index ) => {
	const isEnable = button?.enable ?? true;
	const buttonNo = index + 1;
	const title = __( '[ys]マーカー', 'ystandard-blocks' );
	const name = `ystdb/inline-style-${ buttonNo }`;
	const className = `ystdb-inline--${ buttonNo }`;
	if ( isEnable ) {
		registerFormatType( name, {
			title: `${ title } ${ buttonNo }`,
			tagName: 'span',
			className,
			edit( props ) {
				const { value, isActive, onChange } = props;
				const onToggle = () =>
					onChange( toggleFormat( value, { type: name } ) );
				return (
					<RichTextToolbarButton
						name={ 'bold' }
						icon={ 'admin-customizer' }
						title={ `${ title } ${ buttonNo }` }
						onClick={ onToggle }
						isActive={ isActive }
						className={ classnames(
							'ystdb-inline-style-toolbar',
							`inline-style-${ buttonNo }`
						) }
					>
						<span
							className={ classnames(
								'ystdb-inline-style-toolbar__marker',
								className
							) }
						/>
					</RichTextToolbarButton>
				);
			},
		} );
	}
} );
