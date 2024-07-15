/**
 * Plugin dependencies.
 */
import { getBlockEditorConfig } from '@aktk/blocks/utils';

/**
 * 枠線タイプかどうか.
 * @param type
 */
export function isTypeOutline( type: string ) {
	return 'serif-border' === type;
}

/**
 * バルーン背景色取得.
 * @param type
 * @param backgroundColor
 */
export const getBalloonBackground = (
	type: string,
	backgroundColor: string
) => {
	const balloonOption = getBlockEditorConfig( 'balloonOption', {} );
	// 枠線タイプの場合はコンテンツ背景色を適用.
	if ( isTypeOutline( type ) && ! backgroundColor ) {
		return balloonOption.contentBackground;
	}
	return backgroundColor;
};
