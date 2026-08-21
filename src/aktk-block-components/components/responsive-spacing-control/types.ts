import type { SpacingSizeValues } from '@aktk/block-components/wp-controls/spacing-size-control';

export type ResponsiveSpacingDevice = 'desktop' | 'tablet' | 'mobile';

export type SpacingSide =
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| 'vertical'
	| 'horizontal';

export type Spacing = SpacingSizeValues;

export type ResponsiveSpacing = Partial<
	Record< ResponsiveSpacingDevice, Spacing >
>;

export interface ResponsiveSpacingControlProps {
	id?: string;
	label: string;
	value?: ResponsiveSpacing;
	onChange: ( value?: ResponsiveSpacing ) => void;
	allowedSides: SpacingSide[];
	minimumCustomValue?: number;
	showResetButton?: boolean;
}
