import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { attributes, supports } from './config';
import { deprecated } from './_deprecated';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/balloon', {
	title: __( '[ys]吹き出し', 'ystandard-blocks' ),
	description: __( 'yStandard Blocks 吹き出しブロック', 'ystandard-blocks' ),
	icon: {
		src: 'format-chat',
		foreground: ystdbConfig.color.iconForeground,
	},
	keywords: [ __( 'balloon' ), __( '吹き出し' ), 'balloon' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	deprecated,
} );
