/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { ToggleGroup } from '@aktk/block-components/components/toggle-group';
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

import type { ElementStylePanelProps } from './types';
import { hasElementStyleValue, updateElementStyle } from './utils';

/**
 * 要素の並び方向設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 並び方向設定パネル.
 */
export function ElementLayoutPanel( props: ElementStylePanelProps ) {
	const { label, panelId, value, onChange } = props;
	const updateOrientation = ( orientation?: 'vertical' | 'horizontal' ) => {
		onChange(
			updateElementStyle(
				value,
				'layout',
				orientation ? { orientation } : undefined
			)
		);
	};
	const resetAll = () => updateOrientation( undefined );

	return (
		<ToolsPanel label={ label } panelId={ panelId } resetAll={ resetAll }>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '並び方向', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( value?.layout?.orientation )
				}
				onDeselect={ resetAll }
				isShownByDefault
			>
				<ToggleGroup
					label={ __( '並び方向', 'ystandard-blocks' ) }
					value={ value?.layout?.orientation ?? 'vertical' }
					options={ [
						{
							label: __( '縦並び', 'ystandard-blocks' ),
							value: 'vertical',
						},
						{
							label: __( '横並び', 'ystandard-blocks' ),
							value: 'horizontal',
						},
					] }
					onChange={ ( orientation ) =>
						updateOrientation(
							'horizontal' === orientation
								? 'horizontal'
								: undefined
						)
					}
					isBlock
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
