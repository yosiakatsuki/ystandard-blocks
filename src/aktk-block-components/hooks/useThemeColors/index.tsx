/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
// @ts-ignore
import { useSettings } from '@wordpress/block-editor';

type themeColorsOptions = {
	enableCurrentColor?: boolean;
	enableTransparent?: boolean;
};

const CURRENT_COLOR = {
	name: 'currentColor',
	slug: 'currentColor',
	color: 'currentColor',
};

const TRANSPARENT = {
	name: 'transparent',
	slug: 'transparent',
	color: 'transparent',
};

/**
 * テーマのカラー設定を取得する（設定画面用）
 * @param options
 */
const useThemeColors = ( options?: themeColorsOptions ) => {
	const { enableCurrentColor = false, enableTransparent = false } =
		options || {};
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
				colors: [
					...themeColors,
					...( enableCurrentColor ? [ CURRENT_COLOR ] : [] ),
					...( enableTransparent ? [ TRANSPARENT ] : [] ),
				],
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
