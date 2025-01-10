import { FiMessageSquare } from 'react-icons/fi';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * aktk
 */
import { COLORS } from '@aktk/block-components/config';

/**
 * Plugin.
 */
import { mergeDefaultAttributes } from '@aktk/blocks/utils';
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
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<FiMessageSquare
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

registerBalloonBlock();
