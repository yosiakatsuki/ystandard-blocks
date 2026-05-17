import { Maximize } from 'react-feather';
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
import save from './save';
import './style.scss';

export function registerGroupBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		icon: (
			<Maximize
				stroke={ COLOR.iconForeground }
				style={ { fill: 'none' } }
			/>
		),
		category: CATEGORY.common,
		edit,
		save,
		example: {},
	} );
}

registerGroupBlock();
