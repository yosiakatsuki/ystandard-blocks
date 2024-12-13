/**
 * WordPress dependencies.
 */
import { BlockControls as WPBlockControls } from '@wordpress/block-editor';
/**
 * Block dependencies.
 */
import { HeadingLevel } from './heading-level';
import { Align } from './align';

// @ts-ignore
export function BlockControls( props ) {
	return (
		<WPBlockControls group={ 'block' }>
			<HeadingLevel { ...props } />
			<Align { ...props } />
		</WPBlockControls>
	);
}
