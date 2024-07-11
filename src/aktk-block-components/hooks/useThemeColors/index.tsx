/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

/**
 * テーマのカラー設定を取得する（設定画面用）
 */
const useThemeColors = () => {
	const [ colors, setColors ] = useState( [] );
	const themeColors = useSelect( ( select ) => {
		// @ts-ignore
		const settings = select( editorStore )?.getEditorSettings();
		return settings?.colors || [];
	}, [] );
	useEffect( () => {
		if ( themeColors ) {
			setColors( themeColors );
		}
	}, [ themeColors ] );

	return colors;
};

export default useThemeColors;


