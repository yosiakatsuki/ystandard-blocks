/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';

/**
 * Block.
 */
import { SizePanel } from './size';
import { ButtonTypePanel } from './button-type';

// @ts-ignore
export function InspectorControls(props) {
	return (
		<>
			<WPInspectorControls>
				<ButtonTypePanel {...props} />
				<SizePanel {...props} />
			</WPInspectorControls>
		</>
	);
}
