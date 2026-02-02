/**
 * WordPress dependencies
 */
import { InspectorControls as WPInspectorControls } from '@wordpress/block-editor';


import { Color } from './color';
import { Border } from './border';
import { Icon } from './icon';
import { FontSize } from './font-size';
import { Padding } from './padding';
import { BlockType } from './block-type';
import { Animation } from './animation';
import { Link } from './link';

// @ts-ignore
export function InspectorControls( props ) {
	return (
		<>
			<WPInspectorControls>
				<Color { ...props } />
				<Border { ...props } />
				<Icon { ...props } />
				<FontSize { ...props } />
				<Padding { ...props } />
				<BlockType { ...props } />
				<Animation { ...props } />
				<Link { ...props } />
			</WPInspectorControls>
		</>
	);
}
