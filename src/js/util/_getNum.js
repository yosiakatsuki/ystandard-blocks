/**
 * 数字変換
 */
export default function getNum(value, min = 0, max = null, defaultNum = null) {
    value = Number(value);

    if (isNaN(value) || value < min) {
        if (null !== defaultNum) {
            value = defaultNum;
        } else {
            value = min;
        }

    }

    if (null !== max && value > max) {
        value = max;
    }

    return value;
}
