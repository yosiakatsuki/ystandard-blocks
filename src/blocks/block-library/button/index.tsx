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
import { mergeDefaultAttributes } from '@aktk/blocks/utils';

export function registerCustomButtonBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);
	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<Link2
					stroke={ COLORS.iconBetaForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.beta,
			attributes,
			edit,
			save,
			example: {},
			transforms,
		},
	} );
}

registerCustomButtonBlock();
