import type { Spacing } from '@aktk/block-components/components/responsive-spacing-control';

export type ElementBorderSide = {
	color?: string;
	style?: string;
	width?: string;
};

export type ElementBorderRadius =
	| string
	| {
			topLeft?: string;
			topRight?: string;
			bottomLeft?: string;
			bottomRight?: string;
	  };

export type ElementBorder = ElementBorderSide & {
	top?: ElementBorderSide;
	right?: ElementBorderSide;
	bottom?: ElementBorderSide;
	left?: ElementBorderSide;
	radius?: ElementBorderRadius;
};

export type ElementStyle = {
	layout?: {
		orientation?: 'vertical' | 'horizontal';
	};
	typography?: {
		fontSize?: string;
		fontFamily?: string;
		fontStyle?: string;
		fontWeight?: string;
		lineHeight?: string | number;
		letterSpacing?: string;
		textDecoration?: string;
		textTransform?: string;
	};
	color?: {
		text?: string;
		background?: string;
		gradient?: string;
	};
	border?: ElementBorder;
	spacing?: {
		blockGap?: string;
		margin?: Spacing;
		padding?: Spacing;
	};
};

export interface ElementStylePanelProps {
	label: string;
	panelId: string;
	value?: ElementStyle;
	onChange: ( value?: ElementStyle ) => void;
}
