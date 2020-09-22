import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import { CreditCard } from 'react-feather';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import transforms from './transforms';

registerBlockType('ystdb/card', {
	title: __('カード', 'ystandard-blocks'),
	description: __('カード型リンクを作成するブロック', 'ystandard-blocks'),
	icon: (
		<CreditCard
			stroke={ystdbConfig.color.iconForeground}
			style={{ fill: 'none' }}
		/>
	),
	keywords: [
		__('card'),
		__('カード'),
		__('blogcard'),
		__('ブログカード'),
		'card',
		'blogcard',
	],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save() {
		return null;
	},
	transforms,
});
