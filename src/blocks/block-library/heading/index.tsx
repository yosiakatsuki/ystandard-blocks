import { Bookmark } from 'react-feather';
/**
 * WordPress Dependencies.
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

/**
 * Register custom heading block.
 */
export function registerHeadingBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<Bookmark
					stroke={ COLORS.iconForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.common,
			attributes,
			edit,
			save,
			example: {},
		},
	} );
}

registerHeadingBlock();
