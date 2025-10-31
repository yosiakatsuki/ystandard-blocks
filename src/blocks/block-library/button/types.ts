/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/custom-font-size-picker';
import type { ResponsiveValues } from '@aktk/blocks/components/responsive-values/types';
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
	iconLeftBlank?: boolean;
	iconRight?: string;
	iconSizeRight?: string;
	iconRightBlank?: boolean;
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
	textDecoration?: string;
	padding?: Spacing;
	responsivePadding?: ResponsiveSpacing;
	width?: string;
	responsiveWidth?: ResponsiveValues;
	animation?: Animation;
	className?: string;
	clientId?: string;
}

type Animation = {
	type?: 'none' | 'shine';
	interval?: string;
};
