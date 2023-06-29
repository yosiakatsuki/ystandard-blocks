// @ts-nocheck
/**
 * 数字変換
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @param {number} defaultValue
 * @deprecated
 */
export default function getNum(
	value,
	min = 0,
	max = null,
	defaultValue = undefined
) {
	if (!isFinite(value) || '' === value || value < min) {
		if (null === defaultValue && ('' === value || undefined === value)) {
			return undefined;
		}
		if (undefined !== defaultValue) {
			value = defaultValue;
		} else {
			value = min;
		}
	}
	value = Number(value);

	if (null !== max && value > max) {
		value = max;
	}

	return value;
}
