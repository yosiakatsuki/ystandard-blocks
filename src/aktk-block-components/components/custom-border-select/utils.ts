import type { FlatBorder, SplitBorders } from './types';
import { isObject } from '@aktk/block-components/utils/object';

/**
 * Splitタイプかのチェック
 * @param value
 */
export function isSplit( value: SplitBorders | FlatBorder ) {
	if ( ! isObject( value ) ) {
		return false;
	}
	const keys = [ 'top', 'right', 'bottom', 'left' ];

	return keys.some( ( key ) => {
		return value.hasOwnProperty( key );
	} );
}
