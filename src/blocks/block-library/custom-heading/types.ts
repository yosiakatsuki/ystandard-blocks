/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/custom-font-size-picker';

export interface Attributes {
	content?: string;
	level?: number;
	align?: 'left' | 'center' | 'right';
	textColor?: string;
	customTextColor?: string;
	fontSize?: string;
	customFontSize?: string;
	responsiveFontSize?: ResponsiveFontSize;
	clearStyle?: boolean;
	anchor?: string;
	className?: string;
	clientId?: string;
}
