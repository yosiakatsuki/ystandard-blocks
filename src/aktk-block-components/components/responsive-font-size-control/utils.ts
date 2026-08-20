/**
 * WordPress dependencies.
 */
// @ts-ignore.
import { getComputedFluidTypographyValue } from '@wordpress/block-editor';

import type {
	FluidTypographySettings,
	FontSizeCalculationSettings,
	FontSizePreset,
	FontSizeValue,
	ResponsiveDevice,
	ResponsiveFontSize,
} from './types';

/**
 * 流体タイポグラフィが有効か判定.
 *
 * @param settings 流体タイポグラフィ設定.
 * @return 流体タイポグラフィが有効な場合はtrue.
 */
function isFluidTypographyEnabled( settings?: FluidTypographySettings ) {
	return (
		true === settings ||
		( !! settings &&
			'object' === typeof settings &&
			0 < Object.keys( settings ).length )
	);
}

/**
 * FontSizePickerの値をCSSへ設定できる文字列に変換.
 *
 * @param value               FontSizePickerが返す値.
 * @param selectedItem        選択されたプリセット.
 * @param calculationSettings 流体タイポグラフィの計算設定.
 * @return CSSへ設定するフォントサイズ.
 */
export function fontSizeValueToCssValue(
	value?: FontSizeValue,
	selectedItem?: FontSizePreset,
	calculationSettings?: FontSizeCalculationSettings
) {
	const selectedValue = selectedItem?.size ?? value;

	// リセット操作では対象デバイスの値を削除する.
	if (
		undefined === selectedValue ||
		null === selectedValue ||
		'' === selectedValue
	) {
		return undefined;
	}

	let cssValue = selectedValue;
	const globalFluidEnabled = isFluidTypographyEnabled(
		calculationSettings?.fluid
	);
	const presetFluidEnabled = isFluidTypographyEnabled( selectedItem?.fluid );

	// プリセットまたはテーマで流体設定が有効な場合は、コアと同じclamp値を保存する.
	if (
		selectedItem &&
		false !== selectedItem.fluid &&
		( globalFluidEnabled || presetFluidEnabled )
	) {
		const presetFluidSettings =
			'object' === typeof selectedItem.fluid
				? selectedItem.fluid
				: undefined;
		const globalFluidSettings =
			'object' === typeof calculationSettings?.fluid
				? calculationSettings.fluid
				: undefined;
		const fluidValue = getComputedFluidTypographyValue( {
			minimumFontSize: presetFluidSettings?.min,
			maximumFontSize: presetFluidSettings?.max,
			fontSize: selectedItem.size,
			minimumFontSizeLimit: globalFluidSettings?.minFontSize,
			minimumViewportWidth: globalFluidSettings?.minViewportWidth,
			maximumViewportWidth:
				globalFluidSettings?.maxViewportWidth ??
				( globalFluidEnabled
					? calculationSettings?.layout?.wideSize
					: undefined ),
		} );

		// 設定値から計算できない場合は、コアと同様にプリセットのsizeへフォールバックする.
		if ( fluidValue ) {
			cssValue = fluidValue;
		}
	}

	// 数値はFontSizePickerの仕様に合わせてpx値として保存する.
	if ( 'number' === typeof cssValue ) {
		return `${ cssValue }px`;
	}

	return cssValue;
}

/**
 * 保存済みCSS値をFontSizePickerが選択状態を判定できる値に変換.
 *
 * @param value               保存済みCSS値.
 * @param fontSizes           選択可能なフォントサイズプリセット.
 * @param calculationSettings 流体タイポグラフィの計算設定.
 * @return FontSizePickerへ渡すフォントサイズ.
 */
export function fontSizeCssValueToPickerValue(
	value: string | undefined,
	fontSizes?: FontSizePreset[],
	calculationSettings?: FontSizeCalculationSettings
) {
	const selectedPreset = fontSizes?.find(
		( fontSize ) =>
			value ===
			fontSizeValueToCssValue(
				fontSize.size,
				fontSize,
				calculationSettings
			)
	);

	return selectedPreset?.size ?? value;
}

/**
 * 指定デバイスのレスポンシブフォントサイズを更新.
 *
 * @param values              更新前の値.
 * @param device              更新対象デバイス.
 * @param value               FontSizePickerが返す値.
 * @param selectedItem        選択されたプリセット.
 * @param calculationSettings 流体タイポグラフィの計算設定.
 * @return 更新後のレスポンシブフォントサイズ.
 */
export function updateResponsiveFontSize(
	values: ResponsiveFontSize | undefined,
	device: ResponsiveDevice,
	value?: FontSizeValue,
	selectedItem?: FontSizePreset,
	calculationSettings?: FontSizeCalculationSettings
) {
	const nextValues = { ...values };
	const cssValue = fontSizeValueToCssValue(
		value,
		selectedItem,
		calculationSettings
	);

	// リセット後に未設定キーを残さず、属性の保存内容を簡潔に保つ.
	if ( undefined === cssValue ) {
		delete nextValues[ device ];
		return nextValues;
	}

	nextValues[ device ] = cssValue;
	return nextValues;
}
