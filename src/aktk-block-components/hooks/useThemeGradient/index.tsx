/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';
// @ts-ignore
import { useSettings } from '@wordpress/block-editor';
import { _x } from '@wordpress/i18n';

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

	return useMemo( () => {
		const result = [];
		if ( themeGradients && themeGradients.length ) {
			result.push( {
				name: _x( 'テーマ', 'useThemeGradients', 'ystandard-blocks' ),
				slug: 'theme',
				gradients: themeGradients,
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
	] );
};

export default useThemeGradients;
