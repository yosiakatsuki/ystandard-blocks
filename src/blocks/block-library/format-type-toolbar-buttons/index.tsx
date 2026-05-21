import { getBlockEditorConfig } from '@aktk/helper/config';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { getProperty } from '@aktk/helper/object';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { brush } from '@wordpress/icons';
import './style-editor.scss';

const buttons = getProperty(
	getBlockEditorConfig( 'inlineStyle', {} ),
	'buttons',
	[]
);

buttons.forEach( ( button, index ) => {
	const isEnable = getProperty( button, 'enable', true );
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
						icon={ brush }
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
