import { Link2 } from 'react-feather';
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

import transforms from './transforms';
import { mergeDefaultAttributes } from '@aktk/blocks/utils';

export function registerSvgButtonBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType(metadata.name, {
		...metadata,
		...{
			icon: (
				<Link2
					stroke={COLOR.iconDeprecatedForeground}
					style={{ fill: 'none' }}
				/>
			),
			category: CATEGORY.deprecated,
			attributes,
			edit,
			save,
			example: {},
			transforms,
		},
	});
}

registerSvgButtonBlock();
