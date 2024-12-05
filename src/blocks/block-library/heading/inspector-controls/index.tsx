/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
/**
 * Internal dependencies.
 */
import { HeadingLevel } from '@aktk/blocks/block-library/heading/inspector-controls/heading-level';
import { ClearStyle } from '@aktk/blocks/block-library/heading/inspector-controls/clear-style';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<HeadingLevel { ...props } />
				<ClearStyle { ...props } />
			</WPInspectorControls>
		</>
	);
}
