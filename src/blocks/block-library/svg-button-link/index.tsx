import { Code } from 'react-feather';
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
import './style.scss';

import { mergeDefaultAttributes } from '@aktk/blocks/utils';

export function registerSvgButtonLinkBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType(metadata.name, {
		...metadata,
		...{
			icon: (
				<Code
					stroke={COLOR.iconDeprecatedForeground}
					style={{ fill: 'none' }}
				/>
			),
			category: CATEGORY.deprecated,
			attributes,
			edit,
			save() {
				return null;
			},
			example: {},
		},
	});
}

registerSvgButtonLinkBlock();
