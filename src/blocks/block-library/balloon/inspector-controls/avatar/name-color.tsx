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
export default function AvatarNameColor( props ) {
	const { avatarNameColor, setAvatarNameColor } = props;

	return (
		<BaseControl
			id={ 'avatar-border-color' }
			label={ __( 'アバター名前文字色', 'ystandard-blocks' ) }
		>
			<ColorPalette
				label={ __( 'アバター名前文字色', 'ystandard-blocks' ) }
				value={ avatarNameColor.color }
				onChange={ ( color ) => {
					setAvatarNameColor( color );
				} }
			/>
		</BaseControl>
	);
}
