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
import { mergeDefaultAttributes } from '@aktk/blocks/utils';
/**
 * Block
 */
// @ts-ignore
import metadata from './block.json';
import edit from './edit';
import save from './save';
import './style.scss';

export function registerCustomHeadingBlock() {
	const blockAttributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<Bookmark
					stroke={ COLORS.iconBetaForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.beta,
			blockAttributes,
			edit,
			save,
			example: {},
			merge( attributes, attributesToMerge ) {
				return {
					content:
						// @ts-ignore.
						( attributes.content || '' ) +
						// @ts-ignore.
						( attributesToMerge.content || '' ),
				};
			},
		},
	} );
}
registerCustomHeadingBlock();
