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
	className?: string;
}

export default function UnitControl( props: UnitControlProps ) {
	// @ts-expect-error
	return <WPUnitControl { ...props } __next40pxDefaultSize />;
}

export { useCustomUnits };
