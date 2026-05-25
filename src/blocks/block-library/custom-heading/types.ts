/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/custom-font-size-picker';
import type {
	ResponsiveSpacing,
	Spacing,
} from '@aktk/block-components/components/custom-spacing-select';

export interface Attributes {
	content: string;
	level?: number;
	textAlign?: 'left' | 'center' | 'right';
	hasSubText?: boolean;
	textColor?: string;
	customTextColor?: string;
	fontSize?: string;
	customFontSize?: string;
	responsiveFontSize?: ResponsiveFontSize;
	margin?: Spacing;
	responsiveMargin?: ResponsiveSpacing;
	padding?: Spacing;
	responsivePadding?: ResponsiveSpacing;
	fontWeight?: string;
	fontStyle?: string;
	lineHeight?: string;
	letterSpacing?: string;
	fontFamily?: string;
	clearStyle?: boolean;
	placeholder?: string;
	anchor?: string;
	className?: string;
	clientId?: string;
}
