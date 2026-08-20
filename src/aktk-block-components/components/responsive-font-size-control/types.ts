export type ResponsiveDevice = 'desktop' | 'tablet' | 'mobile';

export type FontSizeValue = number | string;

export type FontSizePreset = {
	name?: string;
	slug: string;
	size: FontSizeValue;
};

export type ResponsiveFontSize = Partial< Record< ResponsiveDevice, string > >;

export interface ResponsiveFontSizeControlProps {
	id?: string;
	label?: string;
	value?: ResponsiveFontSize;
	onChange: ( value: ResponsiveFontSize ) => void;
	fontSizes?: FontSizePreset[];
	disableCustomFontSizes?: boolean;
}
