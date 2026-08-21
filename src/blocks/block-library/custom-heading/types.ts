/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import type {
	ResponsiveSpacing,
	Spacing,
} from '@aktk/block-components/components/custom-spacing-select';

export interface Attributes {
	content: string;
	level?: number;
	hasSubText?: boolean;
	subText?: string;
	textColor?: string;
	fontSize?: string;
	fontFamily?: string;
	fitText?: boolean;
	style?: {
		color?: {
			background?: string;
			gradient?: string;
			text?: string;
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
			textAlign?: 'left' | 'center' | 'right' | 'justify';
			textDecoration?: string;
			textTransform?: string;
			writingMode?: string;
		};
		ystdb?: {
			customHeading?: {
				responsive?: {
					group?: {
						spacing?: {
							margin?: ResponsiveSpacing;
							padding?: ResponsiveSpacing;
						};
					};
					main?: {
						typography?: {
							fontSize?: ResponsiveFontSize;
						};
					};
				};
			};
		};
	};
	clearStyle?: boolean;
	placeholder?: string;
	anchor?: string;
	className?: string;
	clientId?: string;
}
