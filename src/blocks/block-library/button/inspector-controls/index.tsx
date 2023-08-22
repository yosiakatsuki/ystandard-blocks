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

// @ts-ignore
export function InspectorControls(props) {
	return (
		<>
			<WPInspectorControls>
				<ButtonTypePanel {...props} />
				<SizePanel {...props} />
				<Icon {...props} />
			</WPInspectorControls>
		</>
	);
}
