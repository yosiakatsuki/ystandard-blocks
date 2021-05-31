import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { Maximize } from 'react-feather';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('ystdb/conditional-group-block', {
	title: __('条件付きグループブロック', 'ystandard-blocks'),
	description: __(
		'条件により表示・非表示を切り替えできるグループブロック',
		'ystandard-blocks'
	),
	icon: (
		<Maximize
			stroke={ystdbConfig.color.iconForeground}
			style={{ fill: 'none' }}
		/>
	),
	keywords: [
		__('cgb', 'ystandard-blocks'),
		__('条件付きグループブロック', 'ystandard-blocks'),
		__('conditional group block', 'ystandard-blocks'),
		__('グループブロック', 'ystandard-blocks'),
		'cgb',
		'conditional group block',
	],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	example: {},
});
