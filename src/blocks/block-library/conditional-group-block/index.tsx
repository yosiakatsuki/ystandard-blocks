import { Maximize } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
/**
 * Plugin.
 */
import { mergeDefaultAttributes } from '@aktk/blocks/utils';
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
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	// @ts-ignore
	registerBlockType(metadata.name, {
		...metadata,
		...{
			icon: (
				<Maximize
					stroke={COLOR.iconForeground}
					style={{ fill: 'none' }}
				/>
			),
			category: CATEGORY.common,
			attributes,
			edit,
			save,
			example: {},
		},
	});
}

registerGroupBlock();
