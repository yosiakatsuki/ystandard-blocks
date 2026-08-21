/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { MainTextPanel } from './text-main';
import { SubTextPanel } from './sub-text';
import { ClearStylePanel } from './clear-style';
import { ResponsiveMainPanel } from './styles/responsive-main';
import { ElementStylePanels } from './styles/element-styles';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<MainTextPanel { ...props } />
				<SubTextPanel { ...props } />
				<ClearStylePanel { ...props } />
			</WPInspectorControls>
			<WPInspectorControls group="styles">
				<ElementStylePanels { ...props } />
				<ResponsiveMainPanel { ...props } />
			</WPInspectorControls>
		</>
	);
}
