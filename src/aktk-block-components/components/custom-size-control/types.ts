import type { ResponsiveValues } from '@aktk/block-components/types';
import type { UnitType } from '@aktk/block-components/wp-controls/unit-control';

export interface CustomSizeControlProps {
	value: ResponsiveValues | undefined;
	onChange: ( newValue: ResponsiveValues ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	units?: UnitType[];
	useResponsive?: boolean;
	showResetButton?: boolean;
	additionalContent?: ( isResponsive: boolean ) => React.ReactNode;
}
