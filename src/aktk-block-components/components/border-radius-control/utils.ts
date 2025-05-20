import { isString } from 'lodash';
/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';
/**
 * Internal dependencies
 */
import type { BorderRadiusValue } from './types';

export function getBorderRadiusStyles(
	borderRadius: BorderRadiusValue | string | undefined
) {
	if ( ! borderRadius ) {
		return undefined;
	}
	// 固定値はborderRadiusで返す.
	if ( isString( borderRadius ) ) {
		return {
			borderRadius,
		};
	}
	// borderRadiusの指定があればそれだけ返す.
	if ( borderRadius?.borderRadius ) {
		return {
			borderRadius: borderRadius?.borderRadius,
		};
	}

	return stripUndefined( {
		borderTopLeftRadius: borderRadius?.topLeft,
		borderTopRightRadius: borderRadius?.topRight,
		borderBottomRightRadius: borderRadius?.bottomRight,
		borderBottomLeftRadius: borderRadius?.bottomLeft,
	} );
}
