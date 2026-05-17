import { Info } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * Aktk Dependencies.
 */
import { COLORS } from '@aktk/block-components/config';
/**
 * Plugin.
 */
import { CATEGORY } from '@aktk/blocks/config';
/**
 * Block
 */
import './style.scss';
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import save from './save';
import { deprecated } from './deprecated';

function registerSvgIconBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		icon: (
			<Info stroke={ COLORS.iconForeground } style={ { fill: 'none' } } />
		),
		category: CATEGORY.common,
		edit,
		save,
		example: {},
		deprecated,
	} );
}
registerSvgIconBlock();
