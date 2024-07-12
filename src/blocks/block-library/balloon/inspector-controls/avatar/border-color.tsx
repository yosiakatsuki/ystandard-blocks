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
export default function AvatarBorderColor( props ) {
	const { avatarBorderColor, setAvatarBorderColor } = props;

	return (
		<BaseControl
			id={ 'avatar-border-color' }
			label={ __( 'アバター画像枠線色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( 'アバター画像枠線色', 'ystandard-blocks' ) }
				value={ avatarBorderColor.color }
				onChange={ ( color ) => {
					setAvatarBorderColor( color );
				} }
			/>
		</BaseControl>
	);
}
