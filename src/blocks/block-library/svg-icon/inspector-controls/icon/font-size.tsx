/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Aktk dependencies.
 */
import {
	CustomFontSizePicker,
	type CustomFontSizePickerOnChangeProps,
} from '@aktk/block-components/components/custom-font-size-picker';
import BaseControl from '@aktk/block-components/wp-controls/base-control';

// @ts-expect-error
export function FontSize( props ) {
	const { attributes, setAttributes } = props;
	const { fontSize, customFontSize, responsiveFontSize, className } =
		attributes;

	const handleOnChange = ( value: CustomFontSizePickerOnChangeProps ) => {
		const fontSizeSlug = value?.fontSize?.slug;
		const customFontSizeValue = ! fontSizeSlug
			? value?.customFontSize
			: undefined;

		setAttributes( {
			fontSize: fontSizeSlug,
			customFontSize: customFontSizeValue,
			responsiveFontSize: value?.responsiveFontSize,
			className: className.replace( /is-size--\S+/g, '' ), // 旧クラス削除.
		} );
	};

	return (
		<BaseControl
			id={ 'icon-size' }
			label={ __( 'アイコンサイズ', 'ystandard-toolbox' ) }
		>
			<CustomFontSizePicker
				fontSize={ fontSize }
				customFontSize={ customFontSize }
				responsiveFontSize={ responsiveFontSize }
				onChange={ handleOnChange }
			/>
		</BaseControl>
	);
}
