/**
 * オブジェクトの空プロパティを削除する
 *
 * @param {Object} obj - 削除対象のオブジェクト
 * @return {Object} - 空プロパティを削除したオブジェクト
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
