/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl } from '@wordpress/components';

/**
 * Aktk Dependencies.
 */
import { ColorPalette } from '@aktk/block-components/components/color-pallet-control';

/**
 * Block.
 */
import { isTypeOutline } from '../../utils';

// @ts-ignore
export default function BalloonBorderColor( props ) {
	const { attributes, balloonBorderColor, setBalloonBorderColor } = props;

	// 枠線モード以外は非表示.
	if ( ! isTypeOutline( attributes ) ) {
		return <></>;
	}

	return (
		<BaseControl
			id={ 'balloon-border-color' }
			label={ __( '吹き出し枠線色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( '吹き出し枠線色', 'ystandard-blocks' ) }
				value={ balloonBorderColor.color }
				onChange={ ( color ) => {
					setBalloonBorderColor( color );
				} }
			/>
		</BaseControl>
	);
}
