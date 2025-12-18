/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk Dependencies
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import {
	CustomFontSizePicker,
	type CustomFontSizePickerOnChangeProps,
} from '@aktk/block-components/components/custom-font-size-picker';

// @ts-ignore
export default function AvatarNameFontSize( props ) {
	const { attributes, setAttributes } = props;
	const { avatarNameSize, customAvatarNameSize } = attributes;

	const handleOnChange = ( value: CustomFontSizePickerOnChangeProps ) => {
		setAttributes( {
			avatarNameSize: value?.fontSize?.slug,
			customAvatarNameSize: value?.customFontSize,
		} );
	};

	return (
		<BaseControl
			id={ 'avatar-font-size' }
			label={ __( 'アバター名 文字サイズ', 'ystandard-blocks' ) }
		>
			<CustomFontSizePicker
				fontSize={ {
					slug: avatarNameSize,
					size: customAvatarNameSize,
				} }
				customFontSize={ customAvatarNameSize }
				onChange={ handleOnChange }
				useResponsive={ false }
			/>
		</BaseControl>
	);
}
