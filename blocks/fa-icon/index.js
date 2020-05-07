import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType( 'ystdb/fa-icon', {
	title: __( '[ys]アイコン', 'ystandard-blocks' ),
	description: __( 'Font Awesomeアイコン表示ブロック', 'ystandard-blocks' ),
	icon: {
		src: 'info',
		foreground: ystdbConfig.color.iconDeprecatedForeground,
	},
	keywords: [ __( 'icon' ), __( 'アイコン' ), 'icon', 'fa' ],
	category: ystdbConfig.category.deprecated,
	attributes,
	supports,
	edit,
	save,
} );
