/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block.
 */
import { ButtonTypePanel } from './button-type';
import { Link } from './link';
import { Typography } from './typography';
import { Background } from './background';
import { Icon } from './icon';
import { BorderPanel } from './border';
import { SizePanel } from './size';
import { SpacingPanel } from './spacing';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<Link { ...props } />
				<ButtonTypePanel { ...props } />
				<Typography { ...props } />
				<Background { ...props } />
				<Icon { ...props } />
				<BorderPanel { ...props } />
				<SpacingPanel { ...props } />
				<SizePanel { ...props } />
			</WPInspectorControls>
		</>
	);
}
