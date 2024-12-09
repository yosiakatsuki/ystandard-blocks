export function toNumber(
	value: string | number,
	option:
		| undefined
		| { min?: number; max?: number; default?: number } = undefined
) {
	const number = Number( value );
	const { min, max, default: defaultValue } = option || {};

	if ( isNaN( number ) ) {
		return defaultValue;
	}
	if ( min && number < min ) {
		return min;
	}
	if ( max && number > max ) {
		return max;
	}

	return number;
}

export function parseFloatWithUnit(
	value: string | number | undefined | null,
	defaultNumber: number | undefined = undefined
) {
	if ( undefined === value || null === value ) {
		return defaultNumber;
	}
	const number: number = parseFloat( `${ value }` );
	if ( isNaN( number ) ) {
		return defaultNumber;
	}
	return number;
}
