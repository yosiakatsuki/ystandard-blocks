/**
 * @param      value
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const isObject = ( value ) => {
	return 'object' === typeof value;
};
/**
 * @param      value
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const parseObject = ( value ) => {
	if ( ! value || ! isObject( value ) ) {
		return undefined;
	}
	return 0 < Object.keys( value ).length ? { ...value } : undefined;
};
/**
 * @param      value
 * @param      key
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const hasObjectKey = ( value, key ) => {
	if ( ! isObject( value ) ) {
		return false;
	}
	return value.hasOwnProperty( key );
};
/**
 * @param      obj
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const object2Array = ( obj ) => {
	let result = { ...obj };
	if ( isObject( result ) ) {
		result = Object.entries( result ).map( ( value ) => {
			return value[ 1 ];
		} );
	}
	return result;
};

/**
 * @param      obj
 * @param      key
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const hasKey = ( obj, key ) => {
	if ( ! obj || 'object' !== typeof obj ) {
		return false;
	}

	return obj.hasOwnProperty( key );
};

/**
 * @param      obj
 * @param      key
 * @param      defaultValue
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getProperty = ( obj, key, defaultValue = undefined ) => {
	if ( ! hasKey( obj, key ) ) {
		return defaultValue;
	}

	return obj[ key ];
};

/**
 * @param      obj
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const objectCopy = ( obj ) => {
	return JSON.parse( JSON.stringify( obj ) );
};
