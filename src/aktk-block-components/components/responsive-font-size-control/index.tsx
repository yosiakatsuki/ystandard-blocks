/**
 * WordPress dependencies.
 */
// @ts-ignore.
import { useSettings } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import {
	DesktopControl,
	MobileControl,
	TabletControl,
} from '@aktk/block-components/components/icon-control';
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import FontSizePicker from '@aktk/block-components/wp-controls/font-size-picker';

/**
 * Internal dependencies.
 */
import type {
	FluidTypographySettings,
	FontSizeCalculationSettings,
	FontSizePreset,
	ResponsiveDevice,
	ResponsiveFontSizeControlProps,
} from './types';
import {
	fontSizeCssValueToPickerValue,
	updateResponsiveFontSize,
} from './utils';

/**
 * デバイス別フォントサイズ設定.
 *
 * プリセットを選択した場合もスラッグではなくCSSへ設定できる実値を返す.
 *
 * @param props コンポーネントプロパティ.
 */
export function ResponsiveFontSizeControl(
	props: ResponsiveFontSizeControlProps
): JSX.Element {
	const {
		id,
		label,
		value,
		onChange,
		fontSizes,
		disableCustomFontSizes = false,
	} = props;
	const [ themeFontSizes, fluidTypographySettings, layoutSettings ] =
		useSettings( 'typography.fontSizes', 'typography.fluid', 'layout' );
	const availableFontSizes = ( fontSizes ?? themeFontSizes ) as
		| FontSizePreset[]
		| undefined;
	const calculationSettings: FontSizeCalculationSettings = {
		fluid: fluidTypographySettings as FluidTypographySettings | undefined,
		layout: layoutSettings as FontSizeCalculationSettings[ 'layout' ],
	};
	const renderFontSizePicker = ( device: ResponsiveDevice ) => (
		<FontSizePicker
			value={ fontSizeCssValueToPickerValue(
				value?.[ device ],
				availableFontSizes,
				calculationSettings
			) }
			fontSizes={ availableFontSizes }
			disableCustomFontSizes={ disableCustomFontSizes }
			onChange={ ( newValue, selectedItem ) => {
				onChange(
					updateResponsiveFontSize(
						value,
						device,
						newValue,
						selectedItem,
						calculationSettings
					)
				);
			} }
		/>
	);

	return (
		<BaseControl id={ id } label={ label }>
			<div className="grid grid-cols-1 gap-4">
				<DesktopControl>
					<div>{ renderFontSizePicker( 'desktop' ) }</div>
				</DesktopControl>
				<TabletControl>
					<div>{ renderFontSizePicker( 'tablet' ) }</div>
				</TabletControl>
				<MobileControl>
					<div>{ renderFontSizePicker( 'mobile' ) }</div>
				</MobileControl>
			</div>
		</BaseControl>
	);
}

export type {
	FluidFontSizePreset,
	FluidTypographySettings,
	FontSizeCalculationSettings,
	FontSizePreset,
	FontSizeValue,
	ResponsiveDevice,
	ResponsiveFontSize,
	ResponsiveFontSizeControlProps,
} from './types';
export {
	fontSizeCssValueToPickerValue,
	fontSizeValueToCssValue,
	updateResponsiveFontSize,
} from './utils';
