/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';
// @ts-ignore
import { useSettings } from '@wordpress/block-editor';

/**
 * テーマのカラー設定を取得する（設定画面用）
 */
const useThemeColors = () => {
	const [ colors, setColors ] = useState( [] );
	const [ defaultColors, themeColors, customColors, enableDefaultColors ] =
		useSettings(
			'color.palette.default',
			'color.palette.theme',
			'color.palette.custom',
			'color.defaultPalette'
		);

	const _colors = enableDefaultColors
		? [
				...( themeColors || [] ),
				...( defaultColors || [] ),
				...( customColors || [] ),
		  ]
		: [ ...( themeColors || [] ), ...( customColors || [] ) ];

	useEffect( () => {
		if ( _colors ) {
			// @ts-ignore
			setColors( _colors );
		}
	}, [ _colors ] );

	return colors;
};

export default useThemeColors;
