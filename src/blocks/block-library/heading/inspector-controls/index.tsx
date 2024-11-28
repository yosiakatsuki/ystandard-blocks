/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
/**
 * Internal dependencies.
 */
import { ClearStyle } from '@aktk/blocks/block-library/heading/inspector-controls/clear-style';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<ClearStyle { ...props } />
			</WPInspectorControls>
		</>
	);
}
