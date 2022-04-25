import { Columns } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
 */
import { ystdbConfig } from '@ystd/config/config.js';
import { mergeDefaultAttributes } from '@ystd/helper/attribute';
/**
 * Block.
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

export function registerColumn() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	registerBlockType( metadata.name, {
		...metadata,
		...{
			title: __( 'カラム', 'ystandard-blocks' ),
			description: __(
				'yStandard Blocks カラムブロック',
				'ystandard-blocks'
			),
			icon: (
				<Columns
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

registerColumn();
