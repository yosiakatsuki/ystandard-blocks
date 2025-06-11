import { isString } from 'lodash';
/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';
import { toCssZeroOrRaw } from '@aktk/block-components/utils/number';
/**
 * Internal dependencies
 */
import type { BorderRadiusValue } from './types';

export function getBorderRadiusStyles(
	borderRadius: BorderRadiusValue | string | undefined
) {
	if ( undefined === toCssZeroOrRaw( borderRadius ) ) {
		return undefined;
	}
	// 固定値はborderRadiusで返す.
	if ( isString( borderRadius ) ) {
		return {
			borderRadius: toCssZeroOrRaw( borderRadius ),
		};
	}
	// borderRadiusの指定があればそれだけ返す.
	if ( borderRadius?.borderRadius ) {
		return {
			borderRadius: toCssZeroOrRaw( borderRadius?.borderRadius ),
		};
	}

	// それ以外は各辺の値を返す.
	return stripUndefined( {
		borderTopLeftRadius: toCssZeroOrRaw( borderRadius?.topLeft ),
		borderTopRightRadius: toCssZeroOrRaw( borderRadius?.topRight ),
		borderBottomRightRadius: toCssZeroOrRaw( borderRadius?.bottomRight ),
		borderBottomLeftRadius: toCssZeroOrRaw( borderRadius?.bottomLeft ),
	} );
}
