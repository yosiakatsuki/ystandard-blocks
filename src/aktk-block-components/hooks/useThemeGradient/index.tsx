/**
 * WordPress dependencies
 */
import { useEffect, useState, useMemo } from '@wordpress/element';
// @ts-ignore
import { useSettings } from '@wordpress/block-editor';

/**
 * テーマのカラー設定を取得する（設定画面用）
 */
const useThemeGradients = () => {
	const [ gradients, setGradients ] = useState( [] );
	const [
		userGradientPalette,
		themeGradientPalette,
		defaultGradientPalette,
	] = useSettings(
		'color.gradients.custom',
		'color.gradients.theme',
		'color.gradients.default'
	);
	const allGradients = useMemo(
		() => [
			...( userGradientPalette || [] ),
			...( themeGradientPalette || [] ),
			...( defaultGradientPalette || [] ),
		],
		[ userGradientPalette, themeGradientPalette, defaultGradientPalette ]
	);
	useEffect( () => {
		if ( allGradients ) {
			// @ts-ignore
			setGradients( allGradients );
		}
	}, [ allGradients ] );

	return gradients;
};

export default useThemeGradients;
