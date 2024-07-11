/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { PanelColorSettings } from '@wordpress/block-editor';

// @ts-ignore
export function Color( props ) {
	const {
		setAttributes,
		backgroundColor,
		setBackgroundColor,
		textColor,
		setTextColor,
	} = props;
	return (
		<>
			<PanelColorSettings
				title={ __( '色設定', 'ystandard-blocks' ) }
				initialOpen={ true }
				colorSettings={ [
					{
						value: backgroundColor.color,
						// @ts-ignore
						onChange: ( newColor ) => {
							setAttributes( { customGradient: undefined } );
							setBackgroundColor( newColor );
						},
						label: __( '背景色', 'ystandard-blocks' ),
					},
					{
						value: textColor.color,
						// @ts-ignore
						onChange: ( color ) => {
							setTextColor( color );
						},
						label: __( '文字色', 'ystandard-blocks' ),
					},
				] }
			/>
		</>
	);
}
