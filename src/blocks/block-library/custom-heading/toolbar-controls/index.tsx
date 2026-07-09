/**
 * WordPress dependencies.
 */
import { BlockControls as WPBlockControls } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import { TextAlign } from './text-align';

// @ts-ignore
export function ToolbarControls( props ) {
	return (
		<WPBlockControls group={ 'block' }>
			<TextAlign { ...props } />
		</WPBlockControls>
	);
}
