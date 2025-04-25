import {
	// @ts-ignore
	ColorPaletteControl,
	// @ts-ignore
	__experimentalColorGradientControl as WPColorGradientControl,
	// @ts-expect-error
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
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
	gradientValue?: string;
	setGradient?: ( newGradientValue: string ) => void;
	gradients?: string[];
}

/**
 *
 * @param      props
 */
export function ColorGradientPalette( props: ColorGradientPaletteProps ) {
	const {
		label,
		colorValue,
		onColorChange,
		colors,
		gradientValue,
		setGradient,
		gradients,
	} = props;
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	// 色設定を取得
	const themeColors = useThemeColors();
	const themeGradients = useThemeGradients();
	// カラーパレットの設定
	const paletteColors = colors || themeColors;
	const paletteGradients = gradients || themeGradients;

	const controlProps = {
		clearable: false,
		colors: paletteColors,
		colorValue,
		gradientValue,
		label,
		onColorChange,
		gradients: paletteGradients,
		onGradientChange: setGradient,
		showTitle: false,
		disableCustomGradients: false,
		disableCustomColors: false,
		...colorGradientSettings,
	};
	return (
		<>
			<ColorDropdownWrapper
				colorValue={ gradientValue ?? colorValue }
				label={ label }
			>
				<WPColorGradientControl { ...controlProps } />
			</ColorDropdownWrapper>
		</>
	);
}
