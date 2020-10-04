/**
 * 数字変換
 *
 * @param {string} value
 * @param {number} min
 * @param {number} max
 * @param {number} defaultNum
 */
export default function getNum(value, min = 0, max = null, defaultNum = null) {
	if (isNaN(value) || value < min) {
		if (null !== defaultNum) {
			value = defaultNum;
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
