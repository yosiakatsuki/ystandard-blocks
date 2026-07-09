/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { MainTextPanel } from './text-main';
import { GroupSpacingPanel } from './spacing-group';
import { ClearStylePanel } from './clear-style';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<MainTextPanel { ...props } />
			<GroupSpacingPanel { ...props } />
			<ClearStylePanel { ...props } />
		</WPInspectorControls>
	);
}
