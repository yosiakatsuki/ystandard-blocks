/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';
/**
 * Aktk Dependencies.
 */
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';

// @ts-ignore
export default function BalloonBackgroundColor( props ) {
	const {
		backgroundColor,
		setBackgroundColor,
		setBalloonBorderColor,
		attributes,
	} = props;

	const isTypeSerif = 'serif-border' === attributes.balloonType;

	return (
		<BaseControl
			id={ 'balloon-background-color' }
			label={ __( '吹き出し背景色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( '吹き出し背景色', 'ystandard-blocks' ) }
				value={ backgroundColor.color }
				onChange={ ( color ) => {
					setBackgroundColor( color );
					if ( ! isTypeSerif ) {
						setBalloonBorderColor( color );
					}
				} }
			/>
		</BaseControl>
	);
}
