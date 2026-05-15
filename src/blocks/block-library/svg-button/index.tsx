import { Link2 } from 'react-feather';
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
import './style.scss';

import transforms from './transforms';

export function registerSvgButtonBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		...{
			icon: (
				<Link2
					stroke={ COLORS.iconDeprecatedForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.deprecated,
			edit,
			save,
			example: {},
			transforms,
		},
	} );
}

registerSvgButtonBlock();
