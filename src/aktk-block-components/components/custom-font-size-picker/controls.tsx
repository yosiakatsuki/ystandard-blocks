import classnames from 'classnames';
import { isNumber, isString } from 'lodash';
/**
 * WordPress dependencies
 */
import type { FontSize } from '@wordpress/components/src/font-size-picker/types';

/**
 * Aktk dependencies.
 */
import useThemeFontSizes from '@aktk/block-components/hooks/useThemeFontSizes';
import FontSizePicker from '@aktk/block-components/wp-controls/font-size-picker';
import Button from '@aktk/block-components/wp-controls/button';
import { IconUnitControl } from '@aktk/block-components/components/icon-control';
import { ResponsiveSelectTab } from '@aktk/block-components/components/tab-panel';

/**
 * Internal dependencies
 */
import type { ResponsiveFontSize, CustomFontSizePickerProps } from './types';
import './style-editor.scss';

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
		wpPickerDisableCustomFontSizes = false,
		responsiveControlStyle = 'vertical',
		showResetButton = true,
		onChange,
	} = props;

	const presetFontSize = themeFontSizes.filter( ( size: FontSize ) => {
		if ( ! isString( fontSize ) ) {
			return false;
		}
		return size.slug === fontSize;
	} )[ 0 ] as FontSize | undefined;

	// WPフォントサイズピッカー用にサイズ抽出.
	const wpPickerFontSize =
		presetFontSize?.size ??
		fontSize?.size ??
		customFontSize ??
		responsiveFontSize?.desktop;

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
			customFontSize: isNumber( newValue ) ? `${ newValue }px` : newValue,
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
						<FontSizePicker
							onChange={ handleOnWPPickerChange }
							value={ wpPickerFontSize }
							fontSizes={ themeFontSizes }
							disableCustomFontSizes={
								wpPickerDisableCustomFontSizes
							}
						/>
					}
					responsiveTabContent={
						<CustomSizeInputPanel
							responsiveFontSize={ responsiveFontSize }
							onChange={ handleOnCustomInputChange }
							responsiveControlStyle={ responsiveControlStyle }
							showResetButton={ showResetButton }
						/>
					}
				/>
			) : (
				<FontSizePicker
					onChange={ handleOnWPPickerChange }
					value={ wpPickerFontSize }
					fontSizes={ themeFontSizes }
				/>
			) }
		</div>
	);
}

/**
 * カスタムフォントサイズ入力パネル
 * @param props
 * @param props.responsiveFontSize
 * @param props.onChange
 * @param props.responsiveControlStyle
 * @param props.showResetButton
 */
export function CustomSizeInputPanel( props: {
	responsiveFontSize?: ResponsiveFontSize;
	onChange: ( value: ResponsiveFontSize ) => void;
	responsiveControlStyle?: 'vertical' | 'horizontal';
	showResetButton?: boolean;
} ) {
	const {
		responsiveFontSize,
		onChange,
		responsiveControlStyle = 'vertical',
		showResetButton = true,
	} = props;

	const handleOnChange = ( newValue: ResponsiveFontSize ) => {
		onChange( newValue );
	};

	const handleOnReset = () => {
		handleOnChange( {
			desktop: undefined,
			tablet: undefined,
			mobile: undefined,
		} );
	};

	const gridClassName = classnames( 'grid grid-cols-1 gap-2', {
		'gap-4 md:grid-cols-3': 'horizontal' === responsiveControlStyle,
	} );

	return (
		<div>
			<div className={ gridClassName }>
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
			{ showResetButton && (
				<Button
					onClick={ handleOnReset }
					size={ 'small' }
					variant={ 'secondary' }
					isDestructive
					className={ 'mt-2 w-full justify-center text-center' }
				>
					リセット
				</Button>
			) }
		</div>
	);
}
