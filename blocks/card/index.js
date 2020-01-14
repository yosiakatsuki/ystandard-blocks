import {
	ystdbConfig,
} from '../../src/js/config/config';
import edit from './edit';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/card', {
	title: __( '[ys]カード', 'ystandard-blocks' ),
	description: __( 'カード型リンクを作成するブロック', 'ystandard-blocks' ),
	icon: {
		src: 'share-alt2',
		foreground: ystdbConfig.color.iconForeground,
	},
	keywords: [
		__( 'card' ),
		__( 'カード' ),
		__( 'blogcard' ),
		__( 'ブログカード' ),
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
} );
