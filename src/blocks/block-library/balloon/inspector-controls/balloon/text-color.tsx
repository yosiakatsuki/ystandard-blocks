/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
import { ContrastChecker } from '@wordpress/block-editor';
/**
 * Aktk Dependencies.
 */
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';

// @ts-ignore
export default function BalloonTextColor( props ) {
	const { textColor, backgroundColor, setTextColor } = props;

	return (
		<BaseControl
			id={ 'balloon-text-color' }
			label={ __( '吹き出し文字色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( '吹き出し文字色', 'ystandard-blocks' ) }
				value={ textColor.color }
				onChange={ ( color ) => {
					setTextColor( color );
				} }
			/>
			<ContrastChecker
				backgroundColor={ backgroundColor.color }
				textColor={ textColor.color }
			/>
		</BaseControl>
	);
}
