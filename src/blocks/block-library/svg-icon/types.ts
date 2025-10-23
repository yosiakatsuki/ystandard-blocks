/**
 * Aktk dependencies.
 */
import type {
	ResponsiveSpacing,
	Spacing,
} from '@aktk/block-components/components/custom-spacing-select';
import type { ResponsiveValues } from '@aktk/blocks/components/responsive-values';

/**
 * Block attributes.
 */
export type ResponsiveFontSize = {
	[ key: string ]: string;
};

export interface Attributes {
	icon?: string;
	iconSize?: string;
	align?: string;
	textColor?: string;
	customTextColor?: string;
	fontSize?: string;
	customFontSize?: string;
	// 3.19.0 add.
	responsiveFontSize?: ResponsiveFontSize;
	// 3.19.0 add.
	backgroundColor?: string;
	// 3.19.0 add.
	customBackgroundColor?: string;
	url?: string;
	linkTarget?: string;
	rel?: string;
	className?: string;
	padding?: Spacing;
	responsivePadding?: ResponsiveSpacing;
	width?: string;
	responsiveWidth?: ResponsiveValues;
	height?: string;
	responsiveHeight?: ResponsiveValues;
}
