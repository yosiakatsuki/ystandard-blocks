import { Layers } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * aktk
 */
import { COLORS } from '@aktk/block-components/config';

/**
 * Block.
 */
import edit from './edit';
import save from './save';
import { deprecated } from './deprecated/index';
// @ts-ignore
import metadata from './block.json';
import './style.scss';

// @ts-ignore
registerBlockType( metadata.name, {
	icon: (
		<Layers stroke={ COLORS.iconForeground } style={ { fill: 'none' } } />
	),
	edit,
	save,
	deprecated,
	example: {},
} );
