/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { ClearStyle } from './clear-style';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<ClearStyle { ...props } />
		</WPInspectorControls>
	);
}
