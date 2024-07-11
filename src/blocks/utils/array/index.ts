export function isEmptyArray( value: unknown ) {
	if ( ! Array.isArray( value ) ) {
		return false;
	}
	return 0 === value.length;
}
