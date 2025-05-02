export interface ResponsiveValues {
	desktop?: string;
	tablet?: string;
	mobile?: string;
}
export type MayBeResponsiveValue =
	| string
	| number
	| boolean
	| object
	| ResponsiveValues
	| undefined;

export type FlatValue = string | number | boolean | object | undefined;
