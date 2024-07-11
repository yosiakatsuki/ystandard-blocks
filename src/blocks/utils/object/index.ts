export function removeUndefined( value: object ) {
	try {
		return JSON.parse( JSON.stringify( value ) );
	} catch ( error ) {
		return {};
	}
}
