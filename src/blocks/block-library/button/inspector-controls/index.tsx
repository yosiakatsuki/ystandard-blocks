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
import { Background } from './background';

// @ts-ignore
export function InspectorControls(props) {
	return (
		<>
			<WPInspectorControls>
				<ButtonTypePanel {...props} />
				<Typography {...props} />
				<Background {...props} />
				<SizePanel {...props} />
				<Icon {...props} />
			</WPInspectorControls>
		</>
	);
}
