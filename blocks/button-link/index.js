import { ystdbConfig } from '../../src/js/config/config';
import deprecated from './_deprecated';
import edit from './edit';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/btn-link', {
	title: __( 'ボタン型リンク(非推奨)', 'ystandard-blocks' ),
	description: __(
		'入力したリンク(a)タグをボタン形式で表示するブロック',
		'ystandard-blocks'
	),
	icon: {
		src: 'embed-generic',
		foreground: ystdbConfig.color.iconDeprecatedForeground,
	},
	category: ystdbConfig.category.deprecated,
	attributes,
	supports,
	edit,
	save() {
		return null;
	},
	deprecated,
} );
