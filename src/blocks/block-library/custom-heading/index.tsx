import { Bookmark } from 'react-feather';
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
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import save from './save';
import { transforms } from './transform';
import './style.scss';

export function registerCustomHeadingBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		icon: (
			<Bookmark
				stroke={ COLORS.iconBetaForeground }
				style={ { fill: 'none' } }
			/>
		),
		category: CATEGORY.beta,
		edit,
		save,
		example: {},
		transforms,
		merge( attributes, attributesToMerge ) {
			return {
				content:
					// @ts-ignore.
					( attributes.content || '' ) +
					// @ts-ignore.
					( attributesToMerge.content || '' ),
			};
		},
	} );
}
registerCustomHeadingBlock();
