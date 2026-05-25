export interface Spacing {
	top?: string;
	right?: string;
	bottom?: string;
	left?: string;
}

export interface ResponsiveSpacing {
	desktop?: Spacing;
	tablet?: Spacing;
	mobile?: Spacing;
}

export type ResponsiveSpacingSelectOnChangeProps= {
	spacing?: Spacing;
	responsiveSpacing?: ResponsiveSpacing;
};

export interface ResponsiveSpacingSelectProps {
	value: Spacing | undefined;
	responsiveValue?: ResponsiveSpacing | undefined;
	onChange: ( newValue: ResponsiveSpacingSelectOnChangeProps ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	sides?: ( 'top' | 'right' | 'bottom' | 'left' )[];
	minimumCustomValue?: number;
	useResponsive?: boolean;
	showResetButton?: boolean;
}

export interface ResponsiveSpacingSelectControlProps {
	value: ResponsiveSpacing | undefined;
	onChange: ( newValue: ResponsiveSpacing ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	sides?: ( 'top' | 'right' | 'bottom' | 'left' )[];
	minimumCustomValue?: number;
	showResetButton?: boolean;
}
