/**
 * WordPress dependencies
 */
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
import FontSizePicker from '@aktk/block-components/wp-controls/font-size-picker';

/**
 * Internal dependencies
 */
import type {
	ResponsiveFontSize,
	CustomFontSizePickerProps,
	CustomFontSizePickerOnChangeProps,
} from './types';

import './style-editor.scss';
/**
 * Export.
 */
export { ResponsiveFontSize, CustomFontSizePickerOnChangeProps };

/**
 * カスタムフォントサイズピッカー
 * @param props
 */
export function CustomFontSizePicker( props: CustomFontSizePickerProps ) {
	// フォントサイズ設定の取得.
	const themeFontSizes = useThemeFontSizes();

	const {
		fontSize,
		customFontSize,
		responsiveFontSize,
		useResponsive = true,
		onChange,
	} = props;
	// WPフォントサイズピッカー用にサイズ抽出.
	const wpPickerFontSize =
		fontSize?.size ?? customFontSize ?? responsiveFontSize?.desktop;
	// カスタム入力の変更イベント.
	const handleOnCustomInputChange = ( newValue: ResponsiveFontSize ) => {
		// カスタム入力が使われた場合、WPフォントサイズピッカーにdesktopの値を入れつつ更新.
		onChange( {
			fontSize: undefined,
			customFontSize: undefined,
			responsiveFontSize: newValue,
		} );
	};
	// WPフォントサイズピッカーの変更イベント.
	const handleOnWPPickerChange = (
		newValue: number | string | undefined,
		selectedItem?: FontSize
	) => {
		// WPフォントサイズピッカーを使った場合カスタム側の値を削除しつつ更新.
		onChange( {
			fontSize: selectedItem,
			customFontSize: ! selectedItem ? `${ newValue }` : undefined,
			responsiveFontSize: undefined,
		} );
	};

	const isResponsive = () => {
		return !! responsiveFontSize?.tablet || !! responsiveFontSize?.mobile;
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
							responsiveFontSize={ responsiveFontSize }
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
 * @param props.responsiveFontSize
 * @param props.onChange
 */
export function CustomSizeInputPanel( props: {
	responsiveFontSize?: ResponsiveFontSize;
	onChange: ( value: ResponsiveFontSize ) => void;
} ) {
	const { responsiveFontSize, onChange } = props;

	const handleOnChange = ( newValue: ResponsiveFontSize ) => {
		onChange( newValue );
	};

	return (
		<div className={ 'grid grid-cols-1 gap-4 md:grid-cols-3' }>
			<div>
				<IconUnitControl.Desktop
					value={ responsiveFontSize?.desktop }
					onChange={ ( newValue ) => {
						handleOnChange( {
							...responsiveFontSize,
							desktop: newValue,
						} );
					} }
					unitType={ 'fontSize' }
				/>
			</div>
			<div>
				<IconUnitControl.Tablet
					value={ responsiveFontSize?.tablet }
					onChange={ ( newValue ) => {
						handleOnChange( {
							...responsiveFontSize,
							tablet: newValue,
						} );
					} }
					unitType={ 'fontSize' }
				/>
			</div>
			<div>
				<IconUnitControl.Mobile
					value={ responsiveFontSize?.mobile }
					onChange={ ( newValue ) => {
						handleOnChange( {
							...responsiveFontSize,
							mobile: newValue,
						} );
					} }
					unitType={ 'fontSize' }
				/>
			</div>
		</div>
	);
}
