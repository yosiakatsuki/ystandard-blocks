import type { ResponsiveValues } from '@aktk/blocks/components/responsive-values/types';
/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/custom-font-size-picker';
import type {
	ResponsiveSpacing,
	Spacing,
} from '@aktk/block-components/components/custom-spacing-select';

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
	align?: string;
	backgroundColor?: string;
	customBackgroundColor?: string;
	gradient?: string;
	customGradient?: string;
	textColor?: string;
	customTextColor?: string;
	border?: object;
	customBorderColor?: string;
	borderRadius?: string;
	fontSize?: string;
	customFontSize?: string;
	responsiveFontSize: ResponsiveFontSize;
	padding?: Spacing;
	responsivePadding?: ResponsiveSpacing;
	width?: string;
	responsiveWidth?: ResponsiveValues;
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
	hoverAnimation?: ButtonHoverAnimation;
}
