/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
/**
 * Plugin dependencies.
 */
import {
	ResponsiveFontSizeSelect,
	ResponsiveFontSize,
} from '@aktk/blocks/components/responsive-font-size';

// @ts-expect-error
export function FontSize( props ) {
	const { attributes, setAttributes } = props;
	const { fontSize, customFontSize, responsiveFontSize } = attributes;
	const handleOnResponsiveChange = (
		value: ResponsiveFontSize | undefined
	) => {
		setAttributes( {
			responsiveFontSize: value,
			customFontSize: undefined,
			fontSize: undefined,
		} );
	};
	return (
		<>
			<ResponsiveFontSizeSelect
				label={ __( '文字サイズ', 'ystandard-blocks' ) }
				value={ customFontSize || fontSize }
				onPickerChange={ ( size, slug ) => {
					setAttributes( {
						customFontSize: size,
						fontSize: slug,
						responsiveFontSize: undefined,
					} );
				} }
				responsiveValue={ responsiveFontSize }
				onResponsiveChange={ handleOnResponsiveChange }
			/>
		</>
	);
}
