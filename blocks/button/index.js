import { ystdbConfig } from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import icon from './icon';
import transforms from './transforms';
import deprecated from './deprecated';
import { attributes, supports } from './config';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

registerBlockType('ystdb/ys-btn', {
	title: __('カスタムボタン(非推奨)', 'ystandard-blocks'),
	description: __('yStandard Blocks カスタムボタン', 'ystandard-blocks'),
	icon,
	category: ystdbConfig.category.deprecated,
	attributes,
	supports,
	edit,
	save,
	transforms,
	deprecated,
});
