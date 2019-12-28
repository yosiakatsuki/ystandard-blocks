import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/heading', {
	title: __( '[ys]カスタム見出し', 'ystandard-blocks' ),
	description: __( 'カスタム見出しブロック', 'ystandard-blocks' ),
	icon: {
		src: 'heading',
		foreground: ystdbConfig.color.iconForeground,
	},
	keywords: [ __( 'heading' ), __( '見出し' ), 'head', 'fa' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	transforms,
} );
