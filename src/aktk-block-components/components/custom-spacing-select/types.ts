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

export interface ResponsiveSpacingSelectProps {
	value: ResponsiveSpacing | undefined;
	onChange: ( newValue?: ResponsiveSpacing ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	sides?: ( 'top' | 'right' | 'bottom' | 'left' )[];
	minimumCustomValue?: number;
	useResponsive?: boolean;
	showResetButton?: boolean;
}
