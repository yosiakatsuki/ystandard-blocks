/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
// @ts-ignore
import { useSettings } from '@wordpress/block-editor';

/**
 * テーマのカラー設定を取得する（設定画面用）
 */
const useThemeColors = () => {
	const [ defaultColors, themeColors, customColors, enableDefaultColors ] =
		useSettings(
			'color.palette.default',
			'color.palette.theme',
			'color.palette.custom',
			'color.defaultPalette'
		);
	return useMemo( () => {
		const result = [];
		if ( themeColors && themeColors.length ) {
			result.push( {
				name: _x( 'テーマ', 'useThemeColors', 'ystandard-blocks' ),
				colors: themeColors,
			} );
		}
		if ( enableDefaultColors && defaultColors && defaultColors.length ) {
			result.push( {
				name: _x( 'デフォルト', 'useThemeColors', 'ystandard-blocks' ),
				colors: defaultColors,
			} );
		}
		if ( customColors && customColors.length ) {
			result.push( {
				name: _x( 'カスタム', 'useThemeColors', 'ystandard-blocks' ),
				colors: customColors,
			} );
		}
		return result;
	}, [ customColors, themeColors, defaultColors, enableDefaultColors ] );
};

export default useThemeColors;
