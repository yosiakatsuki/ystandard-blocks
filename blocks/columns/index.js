import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { Grid } from 'react-feather';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { deprecated } from './deprecated/index';

registerBlockType('ystdb/columns', {
	apiVersion: 2,
	title: __('カスタムカラム', 'ystandard-blocks'),
	description: __('yStandard Blocks カラムブロック', 'ystandard-blocks'),
	icon: (
		<Grid
			stroke={ystdbConfig.color.iconForeground}
			style={{ fill: 'none' }}
		/>
	),
	keywords: [__('column'), __('カラム'), 'column', 'col'],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	deprecated,
	example: {},
});
