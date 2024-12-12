/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';
/**
 * Internal dependencies.
 */
import { HeadingLevel } from './heading-level';
import { ClearStyle } from './clear-style';
import { Typography } from './typography';
import { Spacing } from './spacing';
import { SubText } from './sub-text';
import { Divider } from './divider';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<HeadingLevel { ...props } />
				<Typography { ...props } />
				<Spacing { ...props } />
				<SubText { ...props } />
				<Divider { ...props } />
				<ClearStyle { ...props } />
			</WPInspectorControls>
		</>
	);
}
