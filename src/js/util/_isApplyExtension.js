/**
 * ブロック拡張を適用するブロックか判定
 *
 * @param blockName string
 */
export default function isApplyExtension( blockName ) {
	let blockNameSpace = blockName;
	const allowedNameSpaces = [
		'core',
		'ystd',
	];
	const isAllow = allowedNameSpaces.filter( name => 0 === blockName.indexOf( name ) );

	return 0 < isAllow.length;
}
