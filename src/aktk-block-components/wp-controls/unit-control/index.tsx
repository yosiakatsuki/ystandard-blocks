import {
	__experimentalUnitControl as WPUnitControl,
	__experimentalUseCustomUnits as useCustomUnits,
} from '@wordpress/components';

export type UnitType = {
	value: string;
	label: string;
	default?: number | string;
};

export interface UnitControlProps {
	label?: string;
	value?: string | number | undefined;
	onChange: ( value: string ) => void;
	units?: UnitType[] | undefined;
	unit?: string | undefined;
	disableUnits?: boolean | undefined;
	isResetValueOnUnitChange?: boolean | undefined;
}

export default function UnitControl( props: UnitControlProps ) {
	// @ts-expect-error
	return <WPUnitControl { ...props } />;
}

export { useCustomUnits };
