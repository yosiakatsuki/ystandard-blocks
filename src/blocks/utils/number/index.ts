// @ts-nocheck
import { toNumber as aktkToNumber } from '@aktk/block-components/utils/number';

/**
 * @param      value
 * @param      option
 * @param      value
 * @param      option
 * @deprecated Use `@aktk/blocks/utils/number` instead.
 */
export function toNumber(
	value: string | number,
	option:
		| undefined
		| { min?: number; max?: number; default?: number } = undefined
) {
	return aktkToNumber( value, option );
}
