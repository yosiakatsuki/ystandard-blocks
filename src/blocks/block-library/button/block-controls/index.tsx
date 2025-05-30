/**
 * WordPress dependencies.
 */
import { BlockControls as WPBlockControls } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import { TextAlign } from './align';
import { ToolbarLinkButton } from '@aktk/blocks/block-library/button/block-controls/link';

// @ts-ignore
export function BlockControls( props ) {
	return (
		<>
			{ /* @ts-ignore */ }
			<WPBlockControls group="block">
				<TextAlign { ...props } />
				<ToolbarLinkButton { ...props } />
			</WPBlockControls>
		</>
	);
}
