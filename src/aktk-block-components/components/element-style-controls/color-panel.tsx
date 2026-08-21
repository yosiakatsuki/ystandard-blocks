/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import useThemeColors from '@aktk/block-components/hooks/useThemeColors';
import useThemeGradients from '@aktk/block-components/hooks/useThemeGradient';
import ColorGradientSettingsDropdown from '@aktk/block-components/wp-controls/color-gradient-settings-dropdown';
import { ToolsPanel } from '@aktk/block-components/wp-controls/tools-panel';

import type { ElementStylePanelProps } from './types';
import { updateElementStyle } from './utils';

/**
 * 要素の背景設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 背景設定パネル.
 */
export function ElementBackgroundPanel( props: ElementStylePanelProps ) {
	const { label, panelId, value, onChange } = props;
	const colors = useThemeColors();
	const gradients = useThemeGradients();
	const updateColor = ( background?: string, gradient?: string ) => {
		onChange(
			updateElementStyle( value, 'color', {
				...value?.color,
				background,
				gradient,
			} )
		);
	};
	const resetAll = () => updateColor( undefined, undefined );

	return (
		<ToolsPanel label={ label } panelId={ panelId } resetAll={ resetAll }>
			<ColorGradientSettingsDropdown
				panelId={ panelId }
				colors={ colors }
				gradients={ gradients }
				__experimentalIsRenderedInSidebar
				settings={ [
					{
						label: __( '色', 'ystandard-blocks' ),
						colorValue: value?.color?.background,
						onColorChange: ( background ) =>
							updateColor( background, undefined ),
						onGradientChange: () => undefined,
						gradients: [],
						disableCustomGradients: true,
						isShownByDefault: false,
					},
					{
						label: __( 'グラデーション', 'ystandard-blocks' ),
						gradientValue: value?.color?.gradient,
						onColorChange: () => undefined,
						onGradientChange: ( gradient ) =>
							updateColor( undefined, gradient ),
						colors: [],
						disableCustomColors: true,
						isShownByDefault: false,
					},
				] }
			/>
		</ToolsPanel>
	);
}
