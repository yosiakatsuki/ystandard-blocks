import {
	// @ts-ignore
	__experimentalColorGradientControl as WPColorGradientControl,
} from '@wordpress/block-editor';

/**
 * Aktk Dependencies
 */
import ColorDropdownWrapper from '@aktk/block-components/components/color-pallet-control/color-dropdown-wrapper';
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';
import useThemeGradients from '@aktk/block-components/hooks/useThemeGradient';

interface ColorGradientPaletteProps {
	label: string;
	colorValue: string;
	onColorChange: ( value: string ) => void;
	colors?: string[];
	gradientValue: string;
	onGradientChange: ( value: string ) => void;
	gradients?: string[];
	enableCurrentColor?: boolean;
	enableTransparent?: boolean;
}

/**
 * カラーパレット（グラデーション対応）
 *
 * @param props
 */
export function ColorGradientPalette( props: ColorGradientPaletteProps ) {
	const {
		label,
		colorValue,
		onColorChange,
		colors,
		gradientValue,
		onGradientChange,
		gradients,
		enableCurrentColor,
		enableTransparent,
	} = props;
	// 色設定を取得
	const themeColors = useThemeColors( {
		enableCurrentColor,
		enableTransparent,
	} );
	const themeGradients = useThemeGradients();

	// カラーパレットの設定
	const paletteColors = colors || themeColors;
	const paletteGradients = gradients || themeGradients;
	return (
		<>
			<ColorDropdownWrapper
				colorValue={ colorValue || gradientValue }
				label={ label }
			>
				<WPColorGradientControl
					colors={ paletteColors }
					colorValue={ colorValue }
					onColorChange={ onColorChange }
					gradients={ paletteGradients }
					gradientValue={ gradientValue }
					onGradientChange={ onGradientChange }
					disableCustomGradients={ false }
					disableCustomColors={ false }
				/>
			</ColorDropdownWrapper>
		</>
	);
}
