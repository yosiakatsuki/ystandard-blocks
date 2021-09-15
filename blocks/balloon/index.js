import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { MessageSquare } from 'react-feather';
import { attributes, supports } from './config';
import { deprecated } from './deprecated/index';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('ystdb/balloon', {
	title: __('吹き出し', 'ystandard-blocks'),
	description: __('吹き出しブロック', 'ystandard-blocks'),
	icon: (
		<MessageSquare
			stroke={ystdbConfig.color.iconForeground}
			style={{ fill: 'none' }}
		/>
	),
	keywords: [__('balloon'), __('吹き出し'), 'balloon'],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	deprecated,
	example: {},
});
