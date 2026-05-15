import { Columns } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * aktk
 */
import { COLORS } from '@aktk/block-components/config';

/**
 * yStandard.
 */
import { CATEGORY } from '@aktk/blocks/config';
/**
 * Block.
 */
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
// @ts-ignore
import metadata from './block.json';
import './style.scss';

export function registerColumnBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		icon: (
			<Columns
				stroke={ COLORS.iconForeground }
				style={ { fill: 'none' } }
			/>
		),
		category: CATEGORY.common,
		edit,
		save,
		example: {},
		deprecated,
	} );
}

registerColumnBlock();
