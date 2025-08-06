/**
 * HEXカラーをRGBに変換
 *
 * @param hex - HEXカラー文字列（#付きまたは#なし）
 * @returns RGB値の配列 [r, g, b]
 *
 * @example
 * hex2rgb('#ff0000') // [255, 0, 0]
 * hex2rgb('ff0000')  // [255, 0, 0]
 * hex2rgb('#f00')    // [255, 0, 0]
 * hex2rgb('f00')     // [255, 0, 0]
 */
export function hex2rgb( hex: string ): number[] {
	let hexValue = hex;
	
	// # を削除
	if ( hexValue.slice( 0, 1 ) === '#' ) {
		hexValue = hexValue.slice( 1 );
	}
	
	// 3文字の場合は6文字に展開
	if ( hexValue.length === 3 ) {
		hexValue =
			hexValue.slice( 0, 1 ) +
			hexValue.slice( 0, 1 ) +
			hexValue.slice( 1, 2 ) +
			hexValue.slice( 1, 2 ) +
			hexValue.slice( 2, 3 ) +
			hexValue.slice( 2, 3 );
	}

	// 2文字ずつに分割してRGB値に変換
	return [
		hexValue.slice( 0, 2 ),
		hexValue.slice( 2, 4 ),
		hexValue.slice( 4, 6 ),
	].map( ( str ) => {
		return parseInt( str, 16 );
	} );
}