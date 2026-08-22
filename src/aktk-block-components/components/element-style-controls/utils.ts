import { stripUndefined } from '@aktk/block-components/utils/object';

import type { ElementStyle } from './types';

/**
 * 要素スタイルの一部を更新.
 *
 * @param value         更新前の要素スタイル.
 * @param property      更新対象のプロパティ.
 * @param propertyValue 更新後の値.
 * @return 更新後の要素スタイル.
 */
export function updateElementStyle< Key extends keyof ElementStyle >(
	value: ElementStyle | undefined,
	property: Key,
	propertyValue: ElementStyle[ Key ]
) {
	return stripUndefined( {
		...value,
		[ property ]: propertyValue,
	} ) as ElementStyle | undefined;
}

/**
 * 要素スタイルに保存値があるか判定.
 *
 * @param value 判定対象.
 * @return 保存値がある場合はtrue.
 */
export function hasElementStyleValue( value: unknown ) {
	return (
		undefined !== value &&
		null !== value &&
		( 'object' !== typeof value || 0 < Object.keys( value ).length )
	);
}
