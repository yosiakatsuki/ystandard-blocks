import { Grid } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
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
import { deprecated } from './deprecated';
import variations from './variations';

export function registerColumns() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	registerBlockType(metadata.name, {
		...metadata,
		...{
			title: __('カスタムカラム', 'ystandard-blocks'),
			description: __(
				'モバイル・タブレット・PCでカラム数を変更できるカラムブロック',
				'ystandard-blocks'
			),
			icon: (
				<Grid
					stroke={ystdbConfig.color.iconForeground}
					style={{ fill: 'none' }}
				/>
			),
			category: ystdbConfig.category.common,
			attributes,
			edit,
			save,
			deprecated,
			example: {},
			variations,
		},
	});
}

registerColumns();
