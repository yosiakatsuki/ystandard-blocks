import { ystdbConfig } from '../../../src/js/config/config';
import edit from './edit';
import save from './save';
import { Columns } from 'react-feather';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('ystdb/column', {
	title: __('カラム', 'ystandard-blocks'),
	description: __('yStandard Blocks カラムブロック', 'ystandard-blocks'),
	icon: (
		<Columns
			stroke={ystdbConfig.color.iconForeground}
			style={{ fill: 'none' }}
		/>
	),
	category: ystdbConfig.category.common,
	attributes,
	supports,
	parent: ['ystdb/columns'],
	edit,
	save,
});
