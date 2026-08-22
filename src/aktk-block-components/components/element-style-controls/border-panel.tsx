/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

/**
 * Aktk dependencies.
 */
import { BorderRadiusControl } from '@aktk/block-components/components/border-radius-control';
import { CustomBorderSelect } from '@aktk/block-components/components/custom-border-select';
import {
	ToolsPanel,
	ToolsPanelItem,
} from '@aktk/block-components/wp-controls/tools-panel';

import type {
	ElementBorder,
	ElementBorderRadius,
	ElementStylePanelProps,
} from './types';
import { hasElementStyleValue, updateElementStyle } from './utils';

/**
 * 要素の枠線設定パネル.
 *
 * @param props コンポーネントプロパティ.
 * @return 枠線設定パネル.
 */
export function ElementBorderPanel( props: ElementStylePanelProps ) {
	const { label, panelId, value, onChange } = props;
	const { radius, ...borderValue } = value?.border ?? {};
	const updateBorder = ( border?: ElementBorder ) =>
		onChange( updateElementStyle( value, 'border', border ) );
	const resetAll = () => updateBorder( undefined );
	const updateRadius = (
		newValue?: { borderRadius?: string } | ElementBorderRadius
	) => {
		const nextRadius =
			'object' === typeof newValue &&
			newValue &&
			'borderRadius' in newValue &&
			newValue.borderRadius
				? newValue.borderRadius
				: ( newValue as ElementBorderRadius | undefined );
		updateBorder( { ...value?.border, radius: nextRadius } );
	};

	return (
		<ToolsPanel label={ label } panelId={ panelId } resetAll={ resetAll }>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '枠線', 'ystandard-blocks' ) }
				hasValue={ () => hasElementStyleValue( borderValue ) }
				onDeselect={ () =>
					updateBorder( radius ? { radius } : undefined )
				}
				isShownByDefault={ false }
			>
				<CustomBorderSelect
					label={ __( '枠線', 'ystandard-blocks' ) }
					value={ borderValue }
					onChange={ ( border ) =>
						updateBorder( { ...border, radius } )
					}
					enableAlpha
				/>
			</ToolsPanelItem>
			<ToolsPanelItem
				className="single-column"
				panelId={ panelId }
				label={ __( '角丸', 'ystandard-blocks' ) }
				hasValue={ () => hasElementStyleValue( radius ) }
				onDeselect={ () => updateRadius( undefined ) }
				isShownByDefault={ false }
			>
				<BorderRadiusControl
					values={ radius }
					onChange={ updateRadius }
				/>
			</ToolsPanelItem>
		</ToolsPanel>
	);
}
