import { Columns } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * aktk
 */
import { COLORS } from '@aktk/block-components/config';

/**
 * yStandard.
 */
import { mergeDefaultAttributes } from '@aktk/blocks/utils';
import { CATEGORY } from '@aktk/blocks/config';
/**
 * Block.
 */
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
// @ts-ignore
import metadata from './block.json';
import './style.scss';

export function registerColumnBlock() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	// @ts-ignore
	registerBlockType( metadata.name, {
		...metadata,
		...{
			icon: (
				<Columns
					stroke={ COLORS.iconForeground }
					style={ { fill: 'none' } }
				/>
			),
			category: CATEGORY.common,
			attributes,
			edit,
			save,
			example: {},
			deprecated,
		},
	} );
}

registerColumnBlock();
