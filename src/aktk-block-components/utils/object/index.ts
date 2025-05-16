/**
 * オブジェクトの空プロパティを削除する
 *
 * @param {Object} obj - 削除対象のオブジェクト
 * @return {Object} - 空プロパティを削除したオブジェクト
 * @deprecated use `stripUndefined` instead
 */
export function deleteUndefined( obj: object ) {
	try {
		const parsed = JSON.parse( JSON.stringify( obj ) );
		return isEmpty( parsed ) ? undefined : parsed;
	} catch ( error ) {
		// // eslint-disable-next-line no-console
		// console.error( error );
		return obj;
	}
}

/**
 * オブジェクトの空プロパティを削除する
 *
 * @param {Object} obj - 削除対象のオブジェクト
 * @return {Object} - 空プロパティを削除したオブジェクト
 */
export function stripUndefined( obj: object ): object {
	if ( ! isObject( obj ) ) {
		return obj;
	}
	return Object.entries( obj ).reduce( ( acc, [ key, value ] ) => {
		if ( value === undefined ) {
			return acc;
		}

		if ( value && typeof value === 'object' && ! Array.isArray( value ) ) {
			// 子オブジェクトも走査
			const cleaned = stripUndefined( value );
			// @ts-ignore
			if ( Object.keys( cleaned ).length ) {
				// @ts-ignore
				acc[ key ] = cleaned;
			}
		} else {
			// @ts-ignore
			acc[ key ] = value;
		}
		return acc;
	}, {} );
}

/**
 * オブジェクトかチェックする
 *
 * @param {any} value - チェック対象の値
 */
export function isObject( value: unknown ) {
	return null !== value && 'object' === typeof value;
}

/**
 * オブジェクトが空かチェックする
 *
 * @param {Object} value - チェック対象の値
 */
export function isEmpty( value: object ) {
	if ( ! isObject( value ) ) {
		return true;
	}
	return Object.keys( value ).length === 0;
}

/**
 * レスポンシブかチェックする
 * @param value
 */
export function isResponsive( value: any ) {
	if ( ! isObject( value ) ) {
		return false;
	}
	// @ts-ignore;
	return !! ( value?.tablet || value?.mobile );
}
