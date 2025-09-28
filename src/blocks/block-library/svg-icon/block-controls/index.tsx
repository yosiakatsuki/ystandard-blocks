/**
 * WordPress dependencies
 */
import { BlockControls as WPBlockControls } from '@wordpress/block-editor';

/**
 * Block dependencies
 */
import { Align } from './align';

// @ts-ignore
export function BlockControls( props ) {
	return (
		<WPBlockControls>
			<Align { ...props } />
		</WPBlockControls>
	);
}
