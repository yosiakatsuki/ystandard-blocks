import { stripUndefined } from '@aktk/block-components/utils/object';

import type { ResponsiveSpacingDevice } from '@aktk/block-components/components/responsive-spacing-control';
import type { ElementLayout } from '@aktk/block-components/components/element-style-controls';
import type { ResponsiveLayout } from './types';

/**
 * 指定デバイスのレスポンシブ配置を更新.
 *
 * @param value       更新前のレスポンシブ配置.
 * @param device      更新対象デバイス.
 * @param deviceValue 更新後の配置.
 * @return 更新後のレスポンシブ配置.
 */
export function updateResponsiveLayout(
	value: ResponsiveLayout | undefined,
	device: ResponsiveSpacingDevice,
	deviceValue?: ElementLayout
) {
	return stripUndefined( {
		...value,
		[ device ]: deviceValue,
	} ) as ResponsiveLayout | undefined;
}

/**
 * レスポンシブ配置に設定値があるか判定.
 *
 * @param value レスポンシブ配置.
 * @return 設定値がある場合はtrue.
 */
export function hasResponsiveLayoutValue( value?: ResponsiveLayout ) {
	return Object.values( value ?? {} ).some(
		( layout ) => 0 < Object.keys( layout ?? {} ).length
	);
}
