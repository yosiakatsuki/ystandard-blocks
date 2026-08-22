export type ResponsiveDevice = 'desktop' | 'tablet' | 'mobile';

export type FontSizeValue = number | string;

export type FluidFontSizePreset =
	| boolean
	| {
			min?: string;
			max?: string;
	  };

export type FontSizePreset = {
	name?: string;
	slug: string;
	size: FontSizeValue;
	fluid?: FluidFontSizePreset;
};

export type FluidTypographySettings =
	| boolean
	| {
			minFontSize?: string;
			minViewportWidth?: string;
			maxViewportWidth?: string;
	  };

export type FontSizeCalculationSettings = {
	fluid?: FluidTypographySettings;
	layout?: {
		wideSize?: string;
	};
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
