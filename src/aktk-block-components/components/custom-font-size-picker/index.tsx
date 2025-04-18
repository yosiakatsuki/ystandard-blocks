import { isNumber } from 'lodash';
/**
 * WordPress dependencies
 */
import { FontSizePicker } from '@wordpress/components';
import { getFontSizeClass } from '@wordpress/block-editor';
import type {
	FontSize,
	FontSizePickerProps,
} from '@wordpress/components/src/font-size-picker/types';

/**
 * Aktk dependencies.
 */
import useThemeFontSizes from '@aktk/block-components/hooks/useThemeFontSizes';
import { IconUnitControl } from '@aktk/block-components/components/icon-control';
import { ResponsiveSelectTab } from '@aktk/block-components/components/tab-panel';

/**
 * Internal dependencies
 */
import type { CustomFontSize, CustomFontSizePickerProps } from './types';

import './style-editor.scss';

export { CustomFontSize };
export * from './util';

/**
 * カスタムフォントサイズピッカー
 * @param props
 */
export default function CustomFontSizePicker(
	props: CustomFontSizePickerProps
) {
	// フォントサイズ設定の取得.
	const themeFontSizes = useThemeFontSizes();

	const { fontSize, useResponsive = true, onChange } = props;
	// WPフォントサイズピッカー用にサイズ抽出.
	const wpPickerFontSize = fontSize?.fontSize?.size ?? fontSize?.desktop;
	// 値の更新.
	const handleOnChange = ( newValue: CustomFontSize ) => {
		onChange( newValue );
	};
	// カスタム入力の変更イベント.
	const handleOnCustomInputChange = ( newValue: CustomFontSize ) => {
		// カスタム入力が使われた場合、WPフォントサイズピッカーにdesktopの値を入れつつ更新.
		const newFontSize = newValue?.desktop
			? { size: newValue.desktop }
			: undefined;
		handleOnChange( {
			...fontSize,
			...newValue,
			fontSize: newFontSize,
		} );
	};
	// WPフォントサイズピッカーの変更イベント.
	const handleOnWPPickerChange = (
		newValue: number | string | undefined,
		selectedItem?: FontSize
	) => {
		// カスタム値の入力の場合`selectedItem`はundefined.
		const newFontSize = {
			size: newValue,
			slug: '',
			className: '',
		};
		if ( !! selectedItem ) {
			newFontSize.slug = selectedItem.slug;
			newFontSize.className = getFontSizeClass( selectedItem.slug );
		}
		// WPフォントサイズピッカーを使った場合カスタム側の値を削除しつつ更新.
		handleOnChange( {
			...fontSize,
			desktop: isNumber( newValue ) ? `${ newValue }px` : newValue,
			tablet: undefined,
			mobile: undefined,
			fontSize: newFontSize,
		} );
	};

	const isResponsive = () => {
		return !! fontSize?.tablet || !! fontSize?.mobile;
	};

	return (
		<div className={ 'aktk-component__custom-font-size-picker' }>
			{ useResponsive ? (
				<ResponsiveSelectTab
					isResponsive={ isResponsive() }
					defaultTabContent={
						<WPFontSizePicker
							onChange={ handleOnWPPickerChange }
							value={ wpPickerFontSize }
							fontSizes={ themeFontSizes }
						/>
					}
					responsiveTabContent={
						<CustomSizeInputPanel
							fontSize={ fontSize }
							onChange={ handleOnCustomInputChange }
						/>
					}
				/>
			) : (
				<WPFontSizePicker
					onChange={ handleOnWPPickerChange }
					value={ wpPickerFontSize }
					fontSizes={ themeFontSizes }
				/>
			) }
		</div>
	);
}

export function WPFontSizePicker( props: FontSizePickerProps ) {
	return <FontSizePicker { ...props } __nextHasNoMarginBottom />;
}

/**
 * カスタムフォントサイズ入力パネル
 * @param props
 */
export function CustomSizeInputPanel( props: CustomFontSizePickerProps ) {
	const { fontSize, onChange } = props;

	const handleOnChange = ( newValue: CustomFontSize ) => {
		onChange( newValue );
	};

	return (
		<div className={ 'grid grid-cols-1 gap-4 md:grid-cols-3' }>
			<div>
				<IconUnitControl.Desktop
					value={ fontSize?.desktop }
					onChange={ ( newValue ) => {
						handleOnChange( {
							...fontSize,
							desktop: newValue,
						} );
					} }
					unitType={ 'fontSize' }
				/>
			</div>
			<div>
				<IconUnitControl.Tablet
					value={ fontSize?.tablet }
					onChange={ ( newValue ) => {
						handleOnChange( {
							...fontSize,
							tablet: newValue,
						} );
					} }
					unitType={ 'fontSize' }
				/>
			</div>
			<div>
				<IconUnitControl.Mobile
					value={ fontSize?.mobile }
					onChange={ ( newValue ) => {
						handleOnChange( {
							...fontSize,
							mobile: newValue,
						} );
					} }
					unitType={ 'fontSize' }
				/>
			</div>
		</div>
	);
}
