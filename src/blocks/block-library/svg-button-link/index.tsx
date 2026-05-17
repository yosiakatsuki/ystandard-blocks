import { Code } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * Plugin.
 */
import { COLOR, CATEGORY } from '@aktk/blocks/config';
/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import './style.scss';

export function registerSvgButtonLinkBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		icon: (
			<Code
				stroke={ COLOR.iconDeprecatedForeground }
				style={ { fill: 'none' } }
			/>
		),
		category: CATEGORY.deprecated,
		edit,
		save() {
			return null;
		},
		example: {},
	} );
}

registerSvgButtonLinkBlock();
