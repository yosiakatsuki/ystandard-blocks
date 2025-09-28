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
	const { fontSize, customFontSize, responsiveFontSize } = attributes;

	const handleOnChange = ( value: CustomFontSizePickerOnChangeProps ) => {
		setAttributes( {
			fontSize: value?.fontSize,
			customFontSize: value?.customFontSize,
			responsiveFontSize: value?.responsiveFontSize,
		} );
	};
	return (
		<BaseControl
			id={ 'font-size' }
			label={ __( 'フォントサイズ', 'ystandard-toolbox' ) }
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
