/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
// @ts-ignore
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * テーマのフォントサイズ設定を取得する（設定画面用）
 */
const useThemeFontSizes = () => {
	const [ fontSizes, setFontSizes ] = useState( [] );
	const themeFontSizes = useSelect(
		// @ts-ignore
		( select ) => select( blockEditorStore ).getSettings()?.fontSizes,
		[]
	);

	useEffect( () => {
		if ( themeFontSizes ) {
			setFontSizes( themeFontSizes );
		}
	}, [ themeFontSizes ] );

	return fontSizes;
};

export default useThemeFontSizes;
