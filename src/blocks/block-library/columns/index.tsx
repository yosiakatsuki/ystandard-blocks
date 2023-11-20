import { Grid } from 'react-feather';
/**
 * WordPress.
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * yStandard.
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
import variations from './variations';
import './style.scss';

export function registerColumns() {
	const attributes = mergeDefaultAttributes(
		metadata.name,
		metadata.attributes
	);

	// @ts-ignore
	registerBlockType(metadata.name, {
		...metadata,
		...{
			icon: (
				<Grid stroke={COLOR.iconForeground} style={{ fill: 'none' }} />
			),
			category: CATEGORY.common,
			attributes,
			edit,
			save,
			example: {},
			variations,
		},
	});
}

registerColumns();
