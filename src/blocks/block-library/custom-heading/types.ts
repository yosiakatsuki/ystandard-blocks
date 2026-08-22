/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import type { ResponsiveLayout } from '@aktk/block-components/components/responsive-layout-control';
import type {
	ResponsiveTextAlign,
	TextAlign,
} from '@aktk/block-components/components/responsive-text-align-control';
import type { ElementStyle } from '@aktk/block-components/components/element-style-controls';
import type {
	ResponsiveSpacing,
	Spacing,
} from '@aktk/block-components/components/responsive-spacing-control';
import type { ResponsiveValues } from '@aktk/block-components/types';

export type ResponsiveTextStyle = {
	typography?: {
		fontSize?: ResponsiveFontSize;
		textAlign?: ResponsiveTextAlign;
	};
	spacing?: {
		margin?: ResponsiveSpacing;
		padding?: ResponsiveSpacing;
	};
};

export type ResponsiveGroupStyle = {
	layout?: ResponsiveLayout;
	typography?: {
		textAlign?: ResponsiveTextAlign;
	};
	spacing?: {
		blockGap?: ResponsiveValues;
		margin?: ResponsiveSpacing;
		padding?: ResponsiveSpacing;
	};
};

export interface Attributes {
	content: string;
	level?: number;
	hasSubText?: boolean;
	subText?: string;
	textColor?: string;
	backgroundColor?: string;
	gradient?: string;
	fontSize?: string;
	fontFamily?: string;
	style?: {
		border?: ElementStyle[ 'border' ];
		color?: {
			background?: string;
			gradient?: string;
			text?: string;
		};
		elements?: {
			link?: {
				color?: {
					text?: string;
				};
			};
		};
		spacing?: {
			margin?: Spacing;
			padding?: Spacing;
		};
		typography?: {
			fontSize?: string;
			fontFamily?: string;
			fontStyle?: string;
			fontWeight?: string;
			lineHeight?: string | number;
			letterSpacing?: string;
			textAlign?: TextAlign;
			textDecoration?: string;
			textTransform?: string;
			writingMode?: string;
		};
		ystdb?: {
			customHeading?: {
				group?: ElementStyle;
				sub?: ElementStyle;
				responsive?: {
					main?: ResponsiveTextStyle;
					sub?: ResponsiveTextStyle;
					group?: ResponsiveGroupStyle;
				};
			};
		};
	};
	placeholder?: string;
	anchor?: string;
	className?: string;
	clientId?: string;
}
