/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { MainTextPanel } from './text-main';
import { SubTextPanel } from './sub-text';
import { ResponsiveMainPanel } from './styles/responsive-main';
import { ResponsiveGroupPanel } from './styles/responsive-group';
import { ResponsiveSubPanel } from './styles/responsive-sub';
import { ElementStylePanels } from './styles/element-styles';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<MainTextPanel { ...props } />
				<SubTextPanel { ...props } />
			</WPInspectorControls>
			<WPInspectorControls group="styles">
				<ElementStylePanels { ...props } />
				<ResponsiveMainPanel { ...props } />
				<ResponsiveSubPanel { ...props } />
				<ResponsiveGroupPanel { ...props } />
			</WPInspectorControls>
		</>
	);
}
