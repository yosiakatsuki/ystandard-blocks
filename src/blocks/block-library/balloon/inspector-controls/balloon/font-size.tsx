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
export default function BalloonFontSize( props ) {
	const { attributes, setAttributes } = props;
	const { fontSize, customFontSize } = attributes;

	const handleOnChange = ( value: CustomFontSizePickerOnChangeProps ) => {
		setAttributes( {
			fontSize: value?.fontSize?.slug,
			customFontSize: value?.customFontSize,
		} );
	};

	return (
		<BaseControl
			id={ 'balloon-font-size' }
			label={ __( '文字サイズ', 'ystandard-blocks' ) }
		>
			<CustomFontSizePicker
				fontSize={ {
					slug: fontSize,
					size: customFontSize,
				} }
				customFontSize={ customFontSize }
				onChange={ handleOnChange }
				useResponsive={ false }
			/>
		</BaseControl>
	);
}
