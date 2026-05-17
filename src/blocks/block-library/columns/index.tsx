import { Grid } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * yStandard.
 */
import { COLOR, CATEGORY } from '@aktk/blocks/config';
/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import save from './save';
import variations from './variations';
import './style.scss';

export function registerColumnsBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		icon: (
			<Grid stroke={ COLOR.iconForeground } style={ { fill: 'none' } } />
		),
		category: CATEGORY.common,
		edit,
		save,
		example: {},
		variations,
	} );
}

registerColumnsBlock();
