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
