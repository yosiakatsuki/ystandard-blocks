import { FiMessageSquare } from 'react-icons/fi';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * aktk
 */
import { COLORS } from '@aktk/block-components/config';

import { CATEGORY } from '@aktk/blocks/config';
/**
 * Block.
 */
import edit from './edit';
import save from './save';
// @ts-ignore
import metadata from './block.json';
import './style.scss';

export function registerBalloonBlock() {
	// @ts-ignore
	registerBlockType( metadata.name, {
		...{
			icon: (
				<FiMessageSquare
					stroke={ COLORS.iconForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.common,
			edit,
			save,
			example: {},
		},
	} );
}

registerBalloonBlock();
