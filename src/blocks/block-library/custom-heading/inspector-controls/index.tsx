/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { LayoutPanel } from './layout';
import { MainTextPanel } from './main-text';
import { SpacingPanel } from './spacing';
import { ClearStylePanel } from './clear-style';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<LayoutPanel { ...props } />
			<MainTextPanel { ...props } />
			<SpacingPanel { ...props } />
			<ClearStylePanel { ...props } />
		</WPInspectorControls>
	);
}
