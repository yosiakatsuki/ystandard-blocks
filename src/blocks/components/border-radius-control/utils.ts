import { isString } from 'lodash';
/**
 * Plugin dependencies
 */
import { removeUndefined } from '@aktk/blocks/utils';
/**
 * Internal dependencies
 */
import type { BorderRadiusValue } from './index';

export function getBorderRadiusStyles(
	borderRadius: BorderRadiusValue | string | undefined
) {
	if (!borderRadius) {
		return undefined;
	}
	// 固定値はborderRadiusで返す.
	if (isString(borderRadius)) {
		return {
			borderRadius: borderRadius,
		};
	}
	// borderRadiusの指定があればそれだけ返す.
	if (borderRadius?.borderRadius) {
		return {
			borderRadius: borderRadius?.borderRadius,
		};
	}

	return removeUndefined({
		borderTopLeftRadius: borderRadius?.topLeft,
		borderTopRightRadius: borderRadius?.topRight,
		borderBottomRightRadius: borderRadius?.bottomRight,
		borderBottomLeftRadius: borderRadius?.bottomLeft,
	});
}
