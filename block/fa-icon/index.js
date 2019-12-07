import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import { attributes, supports } from './config';

import { __ } from '@wordpress/i18n';

export const name = 'ystdb/fa-icon';

export const settings = {
	title: __( '[ys]アイコン', 'ystandard-blocks' ),
	description: __( 'Font Awesomeアイコン表示ブロック', 'ystandard-blocks' ),
	icon: {
		src: 'info',
		foreground: ystdbConfig.color.iconForeground,
	},
	keywords: [ __( 'icon' ), __( 'アイコン' ), 'icon', 'fa' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
};
