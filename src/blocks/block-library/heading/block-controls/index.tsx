/**
 * WordPress dependencies.
 */
import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
/**
 * Block dependencies.
 */
import { HeadingLevel } from '@aktk/blocks/block-library/heading/block-controls/heading-level';

// @ts-ignore
export function BlockControls( props ) {
	return (
		<WPBlockControls group={ 'block' }>
			<HeadingLevel { ...props } />
		</WPBlockControls>
	);
}
