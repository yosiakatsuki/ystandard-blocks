/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

/**
 * テーマのカラー設定を取得する（設定画面用）
 */
const useThemeGradients = () => {
	const [ gradients, setGradients ] = useState( [] );
	const themeGradients = useSelect( ( select ) => {
		// @ts-ignore
		const settings = select( editorStore )?.getEditorSettings();
		return settings?.gradients || [];
	}, [] );
	useEffect( () => {
		if ( themeGradients ) {
			setGradients( themeGradients );
		}
	}, [ themeGradients ] );

	return gradients;
};

export default useThemeGradients;
