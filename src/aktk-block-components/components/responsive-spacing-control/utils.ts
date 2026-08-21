import { stripUndefined } from '@aktk/block-components/utils/object';

import type {
	ResponsiveSpacing,
	ResponsiveSpacingDevice,
	Spacing,
} from './types';

/**
 * 指定デバイスのレスポンシブ余白を更新.
 *
 * @param value       更新前の値.
 * @param device      更新対象デバイス.
 * @param deviceValue 更新する余白.
 * @return 更新後のレスポンシブ余白.
 */
export function updateResponsiveSpacing(
	value: ResponsiveSpacing | undefined,
	device: ResponsiveSpacingDevice,
	deviceValue?: Spacing
) {
	return stripUndefined( {
		...value,
		[ device ]: deviceValue,
	} ) as ResponsiveSpacing | undefined;
}

/**
 * レスポンシブ余白に設定値があるか判定.
 *
 * @param value レスポンシブ余白.
 * @return 設定値がある場合はtrue.
 */
export function hasResponsiveSpacingValue( value?: ResponsiveSpacing ) {
	return Object.values( value ?? {} ).some( ( spacing ) =>
		Object.values( spacing ?? {} ).some(
			( spacingValue ) =>
				undefined !== spacingValue &&
				null !== spacingValue &&
				'' !== spacingValue
		)
	);
}
