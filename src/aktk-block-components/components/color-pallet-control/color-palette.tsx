import {
	// @ts-ignore
	ColorPaletteControl,
	// @ts-ignore
	__experimentalColorGradientControl as WPColorGradientControl,
} from '@wordpress/block-editor';
/**
 * Aktk Dependencies
 */
import ColorDropdownWrapper from '@aktk/block-components/components/color-pallet-control/color-dropdown-wrapper';
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';
import useThemeGradients from '@aktk/block-components/hooks/useThemeGradient';

import './editor-color-palette.scss';

interface ColorPaletteProps {
	label: string;
	value: string;
	onChange: ( value: string ) => void;
	colors?: string[];
}

/**
 * カラーパレット（設定画面用。エディター側はWP提供のコントロールを使おう）
 * @param props
 */
export function ColorPalette( props: ColorPaletteProps ) {
	const { label, value, onChange, colors } = props;
	const themeColors = useThemeColors();

	const paletteColors = colors || themeColors;

	return (
		<>
			<ColorDropdownWrapper colorValue={ value } label={ label }>
				<ColorPaletteControl
					className="aktk-components__color-palette-control"
					label={ label }
					value={ value }
					onChange={ onChange }
					disableCustomColors={ false }
					colors={ paletteColors }
				/>
			</ColorDropdownWrapper>
		</>
	);
}

interface ColorGradientPaletteProps {
	label: string;
	colorValue: string;
	onColorChange: ( value: string ) => void;
	colors?: string[];
	gradientValue: string;
	onGradientChange: ( value: string ) => void;
	gradients?: string[];
}

/**
 *
 * @param      props
 * @deprecated 未完成.
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
	} = props;
	// 色設定を取得
	const themeColors = useThemeColors();
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
