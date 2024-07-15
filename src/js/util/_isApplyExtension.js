/**
 * ブロック拡張を適用するブロックか判定
 *
 * @param {string} blockName
 */
export default function isApplyExtension( blockName ) {
	const allowedNameSpaces = [ 'core', 'ystd' ];
	const isAllow = allowedNameSpaces.filter(
		( name ) => 0 === blockName.indexOf( name )
	);

	return 0 < isAllow.length;
}
