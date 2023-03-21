export function isEmptyArray(value) {
	if (!Array.isArray(value)) {
		return false;
	}
	return 0 === value.length;
}
