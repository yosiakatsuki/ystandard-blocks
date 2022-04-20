export const object2Array = ( obj ) => {
	let result = { ...obj };
	if ( ! Array.isArray( result ) ) {
		result = Object.entries( result ).map( ( value ) => {
			return value[ 1 ];
		} );
	}
	return result;
};

export const hasKey = ( obj, key ) => {
	if ( ! obj || 'object' !== typeof obj ) {
		return false;
	}

	return obj.hasOwnProperty( key );
};

export const getProperty = ( obj, key, defaultValue = undefined ) => {
	if ( ! hasKey( obj, key ) ) {
		return defaultValue;
	}

	return obj[ key ];
};

export const objectCopy = ( obj ) => {
	return JSON.parse( JSON.stringify( obj ) );
};
