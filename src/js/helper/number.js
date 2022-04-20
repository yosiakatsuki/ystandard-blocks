export const toNumber = ( value, defaultValue = undefined ) => {
	if ( Number.isNaN( value ) ) {
		return defaultValue;
	}

	return Number( value );
};

export const getNumValue = (
	value,
	min = 0,
	max = undefined,
	defaultValue = undefined
) => {
	const _value = toNumber( value, defaultValue );
	if ( ! _value ) {
		return min;
	}
	if ( _value < min ) {
		return min;
	}
	if ( !! max && _value > max ) {
		return max;
	}
	return _value;
};
