/**
 * WordPress dependencies.
 */
import { BlockControls as WPBlockControls } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import { TextAlign } from './align';

// @ts-ignore
export function BlockControls( props ) {
	return (
		<>
			{ /* @ts-ignore */ }
			<WPBlockControls group="block">
				<TextAlign { ...props } />
			</WPBlockControls>
		</>
	);
}
