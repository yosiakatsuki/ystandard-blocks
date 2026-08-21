/**
 * Aktk dependencies.
 */
import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import type { ElementStyle } from '@aktk/block-components/components/element-style-controls';
import type {
	ResponsiveSpacing,
	Spacing,
} from '@aktk/block-components/components/responsive-spacing-control';

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
			textAlign?: 'left' | 'center' | 'right' | 'justify';
			textDecoration?: string;
			textTransform?: string;
			writingMode?: string;
		};
		ystdb?: {
			customHeading?: {
				group?: ElementStyle;
				sub?: ElementStyle;
				responsive?: {
					main?: {
						typography?: {
							fontSize?: ResponsiveFontSize;
						};
						spacing?: {
							margin?: ResponsiveSpacing;
							padding?: ResponsiveSpacing;
						};
					};
				};
			};
		};
	};
	placeholder?: string;
	anchor?: string;
	className?: string;
	clientId?: string;
}
