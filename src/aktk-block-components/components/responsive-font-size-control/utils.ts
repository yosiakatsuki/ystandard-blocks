import type {
	FontSizePreset,
	FontSizeValue,
	ResponsiveDevice,
	ResponsiveFontSize,
} from './types';

/**
 * FontSizePickerの値をCSSへ設定できる文字列に変換.
 *
 * @param value        FontSizePickerが返す値.
 * @param selectedItem 選択されたプリセット.
 * @return CSSへ設定するフォントサイズ.
 */
export function fontSizeValueToCssValue(
	value?: FontSizeValue,
	selectedItem?: FontSizePreset
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

	// 数値はFontSizePickerの仕様に合わせてpx値として保存する.
	if ( 'number' === typeof selectedValue ) {
		return `${ selectedValue }px`;
	}

	return selectedValue;
}

/**
 * 指定デバイスのレスポンシブフォントサイズを更新.
 *
 * @param values       更新前の値.
 * @param device       更新対象デバイス.
 * @param value        FontSizePickerが返す値.
 * @param selectedItem 選択されたプリセット.
 * @return 更新後のレスポンシブフォントサイズ.
 */
export function updateResponsiveFontSize(
	values: ResponsiveFontSize | undefined,
	device: ResponsiveDevice,
	value?: FontSizeValue,
	selectedItem?: FontSizePreset
) {
	const nextValues = { ...values };
	const cssValue = fontSizeValueToCssValue( value, selectedItem );

	// リセット後に未設定キーを残さず、属性の保存内容を簡潔に保つ.
	if ( undefined === cssValue ) {
		delete nextValues[ device ];
		return nextValues;
	}

	nextValues[ device ] = cssValue;
	return nextValues;
}
