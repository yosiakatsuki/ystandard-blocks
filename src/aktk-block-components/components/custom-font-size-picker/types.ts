import type { FontSize } from '@wordpress/components/src/font-size-picker/types';

export type ResponsiveFontSize = {
	desktop?: string;
	tablet?: string;
	mobile?: string;
};

export type CustomFontSizePickerOnChangeProps = {
	fontSize?: FontSize;
	customFontSize?: string;
	responsiveFontSize?: ResponsiveFontSize;
};

export interface CustomFontSizePickerProps {
	fontSize?: FontSize;
	customFontSize?: string;
	responsiveFontSize?: ResponsiveFontSize;
	onChange: ( value: CustomFontSizePickerOnChangeProps ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	useResponsive?: boolean;
	showResetButton?: boolean;
	wpPickerDisableCustomFontSizes?: boolean;
}
