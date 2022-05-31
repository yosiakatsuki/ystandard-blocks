import { Maximize } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * yStandard.
 */
import { ystdbConfig } from '@aktk/config/config.js';
import { mergeDefaultAttributes } from '@aktk/helper/attribute';
/**
 * Block
 */
import metadata from './block.json';
import edit from './edit';
import save from './save';

export function registerGroupBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<Maximize
					stroke={ ystdbConfig.color.iconForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: ystdbConfig.category.common,
			attributes,
			edit,
			save,
			example: {},
		},
	} );
}

registerGroupBlock();
