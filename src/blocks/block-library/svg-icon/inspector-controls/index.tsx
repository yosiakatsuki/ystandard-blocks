/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { Color } from './color';
import { Icon } from './icon';
import { Link } from './link';
import { SpacingPanel } from './spacing';
import { SizePanel } from './size';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<WPInspectorControls>
			<Color { ...props } />
			<Icon { ...props } />
			<Link { ...props } />
			<SizePanel { ...props } />
			<SpacingPanel { ...props } />
		</WPInspectorControls>
	);
}
