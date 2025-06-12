/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';
// @ts-ignore
import { useSettings } from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

/**
 * テーマのカラー設定を取得する（設定画面用）
 */
const useThemeGradients = () => {
	const [
		customGradients,
		themeGradients,
		defaultGradients,
		shouldDisplayDefaultGradients,
	] = useSettings(
		'color.gradients.custom',
		'color.gradients.theme',
		'color.gradients.default',
		'color.defaultGradients'
	);

	// useSelectから色情報を取得(主に設定画面用).
	const dataGradients = useSelect( ( select ) => {
		// @ts-ignore
		const settings = select( editorStore )?.getEditorSettings();
		// @ts-ignore
		return settings?.gradients || [];
	}, [] );

	return useMemo( () => {
		const result = [];
		if ( themeGradients && themeGradients.length ) {
			result.push( {
				name: _x( 'テーマ', 'useThemeGradients', 'ystandard-blocks' ),
				slug: 'theme',
				gradients: themeGradients,
			} );
		} else if ( dataGradients && dataGradients.length ) {
			result.push( {
				name: _x( 'テーマ', 'useThemeGradients', 'ystandard-blocks' ),
				slug: 'theme',
				gradients: dataGradients,
			} );
		}
		if (
			shouldDisplayDefaultGradients &&
			defaultGradients &&
			defaultGradients.length
		) {
			result.push( {
				name: _x(
					'デフォルト',
					'useThemeGradients',
					'ystandard-blocks'
				),
				slug: 'default',
				gradients: defaultGradients,
			} );
		}
		if ( customGradients && customGradients.length ) {
			result.push( {
				name: _x( 'カスタム', 'useThemeGradients', 'ystandard-blocks' ),
				slug: 'custom',
				gradients: customGradients,
			} );
		}
		return result;
	}, [
		customGradients,
		themeGradients,
		defaultGradients,
		shouldDisplayDefaultGradients,
		dataGradients,
	] );
};

export default useThemeGradients;
