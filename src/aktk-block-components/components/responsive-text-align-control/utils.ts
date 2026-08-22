import { stripUndefined } from '@aktk/block-components/utils/object';

import type {
	ResponsiveTextAlign,
	ResponsiveTextAlignDevice,
	TextAlign,
} from './types';

/**
 * 指定デバイスのレスポンシブ文字揃えを更新.
 *
 * @param value       更新前のレスポンシブ文字揃え.
 * @param device      更新対象デバイス.
 * @param deviceValue 更新後の文字揃え.
 * @return 更新後のレスポンシブ文字揃え.
 */
export function updateResponsiveTextAlign(
	value: ResponsiveTextAlign | undefined,
	device: ResponsiveTextAlignDevice,
	deviceValue?: TextAlign
) {
	return stripUndefined( {
		...value,
		[ device ]: deviceValue,
	} ) as ResponsiveTextAlign | undefined;
}

/**
 * レスポンシブ文字揃えに設定値があるか判定.
 *
 * @param value レスポンシブ文字揃え.
 * @return 設定値がある場合はtrue.
 */
export function hasResponsiveTextAlignValue( value?: ResponsiveTextAlign ) {
	return Object.values( value ?? {} ).some(
		( textAlign ) => undefined !== textAlign && '' !== textAlign
	);
}
