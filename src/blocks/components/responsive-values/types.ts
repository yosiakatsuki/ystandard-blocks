type ResponsiveValueType = string | number;

export interface ResponsiveValues {
	desktop?: ResponsiveValueType;
	tablet?: ResponsiveValueType;
	mobile?: ResponsiveValueType;
}
export interface ResponsiveValuesUnit {
	value: string;
	label: string;
	default?: number;
}
