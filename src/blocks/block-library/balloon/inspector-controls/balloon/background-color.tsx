/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies.
 */
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';
/**
 * Block.
 */
import { isTypeOutline } from '../../utils';

// @ts-ignore
export default function BalloonBackgroundColor( props ) {
	const {
		backgroundColor,
		setBackgroundColor,
		setBalloonBorderColor,
		attributes,
	} = props;

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
					if ( ! isTypeOutline( attributes?.balloonType ) ) {
						setBalloonBorderColor( color );
					}
				} }
			/>
		</BaseControl>
	);
}
