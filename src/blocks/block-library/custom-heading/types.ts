/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/custom-font-size-picker';

export interface Attributes {
	content: string;
	level?: number;
	textAlign?: 'left' | 'center' | 'right';
	textColor?: string;
	customTextColor?: string;
	fontSize?: string;
	customFontSize?: string;
	responsiveFontSize?: ResponsiveFontSize;
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
