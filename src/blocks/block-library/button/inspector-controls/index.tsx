/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block.
 */
import { SizePanel } from './size';
import { ButtonTypePanel } from './button-type';
import { Icon } from './icon';
import { Typography } from './typography';

// @ts-ignore
export function InspectorControls(props) {
	return (
		<>
			<WPInspectorControls>
				<ButtonTypePanel {...props} />
				<Typography {...props} />
				<SizePanel {...props} />
				<Icon {...props} />
			</WPInspectorControls>
		</>
	);
}
