import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import icon from './icon';
import transforms from './transforms';
import { attributes, supports } from './config';

import { __ } from '@wordpress/i18n';

export const name = 'ystdb/ys-btn';

export const settings = {
	title: __( '[ys]カスタムボタン', 'ystandard-blocks' ),
	description: __( 'yStandard Blocks カスタムボタン', 'ystandard-blocks' ),
	icon,
	keywords: [ __( 'button' ), __( 'ボタン' ), 'btn', 'button' ],
	category: ystdbConfig.category.common,
	attributes,
	supports,
	edit,
	save,
	transforms,
};
