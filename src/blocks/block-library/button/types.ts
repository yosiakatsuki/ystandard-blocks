import type { ResponsiveSpacing } from '@aktk/blocks/components/responsive-spacing/types';
import type { ResponsiveFontSize } from '@aktk/blocks/components/responsive-font-size/types';
import type { ResponsiveValues } from '@aktk/blocks/components/responsive-values/types';

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
