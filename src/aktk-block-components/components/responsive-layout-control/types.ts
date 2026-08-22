import type {
	ElementLayout,
	ElementLayoutDefaultValues,
} from '@aktk/block-components/components/element-style-controls';
import type { ResponsiveSpacingDevice } from '@aktk/block-components/components/responsive-spacing-control';

export type ResponsiveLayout = Partial<
	Record< ResponsiveSpacingDevice, ElementLayout >
>;

export interface ResponsiveLayoutControlProps {
	defaultValues?: ElementLayoutDefaultValues;
	fallbackValue?: ElementLayout;
	label: string;
	onChange: ( value?: ResponsiveLayout ) => void;
	value?: ResponsiveLayout;
}
