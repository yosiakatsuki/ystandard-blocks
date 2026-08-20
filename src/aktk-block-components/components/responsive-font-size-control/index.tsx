/**
 * WordPress dependencies.
 */
// @ts-ignore.
import { useSettings } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import BaseControl from '@aktk/block-components/wp-controls/base-control';
import FontSizePicker from '@aktk/block-components/wp-controls/font-size-picker';

/**
 * Internal dependencies.
 */
import type {
	FontSizePreset,
	ResponsiveDevice,
	ResponsiveFontSizeControlProps,
} from './types';
import { updateResponsiveFontSize } from './utils';

const DEVICE_TABS = [
	{
		name: 'desktop',
		title: __( 'デスクトップ', 'ystandard-blocks' ),
	},
	{
		name: 'tablet',
		title: __( 'タブレット', 'ystandard-blocks' ),
	},
	{
		name: 'mobile',
		title: __( 'モバイル', 'ystandard-blocks' ),
	},
];

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
	const [ themeFontSizes ] = useSettings( 'typography.fontSizes' );
	const availableFontSizes = ( fontSizes ?? themeFontSizes ) as
		| FontSizePreset[]
		| undefined;

	return (
		<BaseControl id={ id } label={ label }>
			<TabPanel
				className="aktk-responsive-font-size-control"
				tabs={ DEVICE_TABS }
				initialTabName="desktop"
			>
				{ ( tab ) => {
					const device = tab.name as ResponsiveDevice;

					return (
						<div className="pt-4">
							<FontSizePicker
								value={ value?.[ device ] }
								fontSizes={ availableFontSizes }
								disableCustomFontSizes={
									disableCustomFontSizes
								}
								onChange={ ( newValue, selectedItem ) => {
									onChange(
										updateResponsiveFontSize(
											value,
											device,
											newValue,
											selectedItem
										)
									);
								} }
							/>
						</div>
					);
				} }
			</TabPanel>
		</BaseControl>
	);
}

export type {
	FontSizePreset,
	FontSizeValue,
	ResponsiveDevice,
	ResponsiveFontSize,
	ResponsiveFontSizeControlProps,
} from './types';
export { fontSizeValueToCssValue, updateResponsiveFontSize } from './utils';
