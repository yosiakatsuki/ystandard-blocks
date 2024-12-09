/**
 * Aktk dependencies.
 */
import { parseFloatWithUnit } from '@aktk/block-components/utils/number';

type GetSpacingResult = {
	value: string | undefined;
	unit: string | undefined;
};

export function getSpacing(
	value: string | number | undefined
): GetSpacingResult {
	const spacing = parseFloatWithUnit( value, undefined );
	// 数値変換できなければ undefined を返す.
	if ( ! spacing || undefined === value ) {
		return {
			value: undefined,
			unit: undefined,
		};
	}
	const spacingString = `${ spacing }`;
	// 単位を取得.
	const unit = `${ value }`.replace( spacingString, '' );
	return {
		value: spacingString,
		unit,
	};
}
