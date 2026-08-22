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
import { getElementLayoutDefaultValues } from './layout-defaults';
import { LayoutOrientationControl } from './layout-orientation-control';
import type { ElementLayout, ElementLayoutPanelProps } from './types';
import { hasElementStyleValue, updateElementStyle } from './utils';

/**
 * 要素の並び方向設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 並び方向設定パネル.
 */
export function ElementLayoutPanel( props: ElementLayoutPanelProps ) {
	const { defaultValues, label, panelId, value, onChange } = props;
	const initialDefaults = getElementLayoutDefaultValues( defaultValues );
	const orientation =
		value?.layout?.orientation ?? initialDefaults.orientation;
	const isHorizontal = 'horizontal' === orientation;
	const {
		alignItems: defaultAlignItems,
		justifyContent: defaultJustifyContent,
	} = getElementLayoutDefaultValues( defaultValues, orientation );
	const alignItems = value?.layout?.alignItems ?? defaultAlignItems;
	const justifyContent =
		value?.layout?.justifyContent ?? defaultJustifyContent;
	const alignItemsLabel = isHorizontal
		? __( '縦方向の配置', 'ystandard-blocks' )
		: __( '横方向の配置', 'ystandard-blocks' );
	const justifyContentLabel = __( '横方向の配置', 'ystandard-blocks' );
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
					value={ orientation }
					onChange={ ( nextOrientation ) =>
						updateLayout(
							'orientation',
							nextOrientation === initialDefaults.orientation
								? undefined
								: nextOrientation
						)
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
					allowBaseline={ isHorizontal }
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
			{ isHorizontal && (
				<ToolsPanelItem
					className="single-column"
					panelId={ panelId }
					label={ justifyContentLabel }
					hasValue={ () =>
						hasElementStyleValue( value?.layout?.justifyContent )
					}
					onDeselect={ () =>
						updateLayout( 'justifyContent', undefined )
					}
					isShownByDefault
				>
					<LayoutAlignmentControl
						axis="horizontal"
						label={ justifyContentLabel }
						property="justifyContent"
						value={ justifyContent }
						onChange={ ( nextJustifyContent ) =>
							updateLayout(
								'justifyContent',
								nextJustifyContent === defaultJustifyContent
									? undefined
									: nextJustifyContent
							)
						}
					/>
				</ToolsPanelItem>
			) }
		</ToolsPanel>
	);
}
