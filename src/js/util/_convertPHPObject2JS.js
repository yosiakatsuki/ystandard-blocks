/**
 * PHP側で作ったオブジェクトをJS用に変換
 *
 * @param {Object} object オブジェクト.
 */
export default function convertPHPObject2JS( object ) {
	return Object.fromEntries(
		Object.entries( object ).map( ( [ key, val ] ) => [
			key,
			null === val ? undefined : val,
		] )
	);
}
