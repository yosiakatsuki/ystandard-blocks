/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

import { LayoutAlignmentControl } from './layout-alignment-control';
import { LayoutOrientationControl } from './layout-orientation-control';
import type {
	ElementAlignItems,
	ElementLayout,
	ElementStylePanelProps,
} from './types';
import { hasElementStyleValue, updateElementStyle } from './utils';

const DEFAULT_JUSTIFY_CONTENT = 'flex-start';

/**
 * 並び方向に対応するalign-itemsの既定値を取得.
 *
 * @param orientation 並び方向.
 * @return align-itemsの既定値.
 */
function getDefaultAlignItems(
	orientation: ElementLayout[ 'orientation' ]
): ElementAlignItems {
	return 'horizontal' === orientation ? 'baseline' : 'stretch';
}

/**
 * 要素の並び方向設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 並び方向設定パネル.
 */
export function ElementLayoutPanel( props: ElementStylePanelProps ) {
	const { label, panelId, value, onChange } = props;
	const orientation = value?.layout?.orientation ?? 'vertical';
	const isHorizontal = 'horizontal' === orientation;
	const defaultAlignItems = getDefaultAlignItems( orientation );
	const alignItems = value?.layout?.alignItems ?? defaultAlignItems;
	const justifyContent =
		value?.layout?.justifyContent ?? DEFAULT_JUSTIFY_CONTENT;
	const alignItemsLabel = isHorizontal
		? __( '縦方向の配置', 'ystandard-blocks' )
		: __( '横方向の配置', 'ystandard-blocks' );
	const justifyContentLabel = isHorizontal
		? __( '横方向の配置', 'ystandard-blocks' )
		: __( '縦方向の配置', 'ystandard-blocks' );
	const updateLayout = < Key extends keyof ElementLayout >(
		property: Key,
		propertyValue: ElementLayout[ Key ]
	) => {
		onChange(
			updateElementStyle( value, 'layout', {
				...value?.layout,
				[ property ]: propertyValue,
			} )
		);
	};
	const resetAll = () =>
		onChange( updateElementStyle( value, 'layout', undefined ) );

	return (
		<ToolsPanel label={ label } panelId={ panelId } resetAll={ resetAll }>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '並び方向', 'ystandard-blocks' ) }
				hasValue={ () =>
					hasElementStyleValue( value?.layout?.orientation )
				}
				onDeselect={ () => updateLayout( 'orientation', undefined ) }
				isShownByDefault
			>
				<LayoutOrientationControl
					value={ value?.layout?.orientation ?? 'vertical' }
					onChange={ ( nextOrientation ) =>
						updateLayout( 'orientation', nextOrientation )
					}
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ alignItemsLabel }
				hasValue={ () =>
					hasElementStyleValue( value?.layout?.alignItems )
				}
				onDeselect={ () => updateLayout( 'alignItems', undefined ) }
				isShownByDefault
			>
				<LayoutAlignmentControl
					axis={ isHorizontal ? 'vertical' : 'horizontal' }
					label={ alignItemsLabel }
					property="alignItems"
					value={ alignItems }
					onChange={ ( nextAlignItems ) =>
						updateLayout(
							'alignItems',
							nextAlignItems === defaultAlignItems
								? undefined
								: nextAlignItems
						)
					}
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ justifyContentLabel }
				hasValue={ () =>
					hasElementStyleValue( value?.layout?.justifyContent )
				}
				onDeselect={ () => updateLayout( 'justifyContent', undefined ) }
				isShownByDefault
			>
				<LayoutAlignmentControl
					axis={ isHorizontal ? 'horizontal' : 'vertical' }
					label={ justifyContentLabel }
					help={
						isHorizontal
							? undefined
							: __(
									'見出しグループの高さが内容より大きい場合に反映されます。',
									'ystandard-blocks'
							  )
					}
					property="justifyContent"
					value={ justifyContent }
					onChange={ ( nextJustifyContent ) =>
						updateLayout(
							'justifyContent',
							nextJustifyContent === DEFAULT_JUSTIFY_CONTENT
								? undefined
								: nextJustifyContent
						)
					}
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
