/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

/**
 * テーマのフォントサイズ設定を取得する（設定画面用）
 */
const useThemeFontSizes = () => {
	const [ fontSizes, setFontSizes ] = useState( [] );
	const themeFontSizes = useSelect(
		// @ts-ignore
		( select ) => select( editorStore ).getEditorSettings()?.fontSizes,
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
