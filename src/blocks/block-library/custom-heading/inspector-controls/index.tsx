/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { MainTextPanel } from './main-text';
import { ClearStylePanel } from './clear-style';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<MainTextPanel { ...props } />
			<ClearStylePanel { ...props } />
		</WPInspectorControls>
	);
}
