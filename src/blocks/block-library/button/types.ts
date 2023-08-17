import type { ResponsiveSpacing } from '@aktk/blocks/components/responsive-spacing/types';
import type { ResponsiveFontSize } from '@aktk/blocks/components/responsive-font-size/types';
import type { ResponsiveValues } from '@aktk/blocks/components/responsive-values/types';

export interface Attributes {
	buttonType?: string;
	content?: string;
	url?: string;
	linkTarget?: string;
	rel?: string;
	iconLeft?: string;
	iconSizeLeft?: string;
	iconRight?: string;
	iconSizeRight?: string;
	iconPosition?: string;
	textAlign?: string;
	backgroundColor?: string;
	customBackgroundColor?: string;
	textColor?: string;
	customTextColor?: string;
	borderColor?: string;
	customBorderColor?: string;
	borderRadius?: string;
	fontSize?: string;
	customFontSize?: string;
	animation?: Animation;
	style?: ButtonStyle;
	className?: string;
	clientId?: string;
}

export interface ButtonHoverAnimation {
	type: string;
	value: object;
}

export interface ButtonStyle {
	padding?: ResponsiveSpacing;
	fontSize?: ResponsiveFontSize;
	width?: ResponsiveValues;
	hoverAnimation?: ButtonHoverAnimation;
}
