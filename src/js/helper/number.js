export const isNumber = ( value ) => {
	return ! Number.isNaN( Number( value ) );
};
export const toNumber = ( value, defaultValue = undefined ) => {
	const newValue = parseFloat( value );
	if ( ! isNumber( newValue ) ) {
		return defaultValue;
	}
	return newValue;
};
export const toInt = ( value, defaultValue = undefined ) => {
	const newValue = parseInt( value );
	if ( ! isNumber( newValue ) ) {
		return defaultValue;
	}
	return newValue;
};

export const getNumber = (
	value,
	defaultValue = undefined,
	min = undefined,
	max = undefined
) => {
	let _value = toNumber( value, defaultValue );
	if ( ! isNumber( _value ) ) {
		return defaultValue;
	}
	if ( isNumber( min ) && min >= _value ) {
		_value = min;
	}
	if ( isNumber( max ) && max <= _value ) {
		_value = max;
	}
	return _value;
};
