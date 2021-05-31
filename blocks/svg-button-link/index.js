import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import { Code } from 'react-feather';
import transforms from './transforms';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('ystdb/svg-button-link', {
	title: __('ボタン型リンク', 'ystandard-blocks'),
	description: __(
		'入力したリンク(a)タグをボタン形式で表示するブロック',
		'ystandard-blocks'
	),
	icon: (
		<Code
			stroke={ystdbConfig.color.iconForeground}
			style={{ fill: 'none' }}
		/>
	),
	keywords: [__('link'), __('button'), 'button'],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save() {
		return null;
	},
	styles: [
		{ name: 'fill', label: __('塗りつぶし'), isDefault: true },
		{ name: 'outline', label: __('アウトライン') },
	],
	transforms,
	example: {},
});
