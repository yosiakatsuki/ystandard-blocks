import {ystdbConfig} from '../../src/js/config/config';
import edit from './edit';
import save from './save';
import {attributes, supports} from "./config";
import {deprecated} from './_deprecated';

import {__} from '@wordpress/i18n';

export const name = 'ystdb/section';

export const settings = {
    title: __('[ys]セクション', 'ystandard-blocks'),
    description: __('yStandard Blocks汎用セクションブロック', 'ystandard-blocks'),
    icon: 'screenoptions',
    keywords: [__('section'), __('セクション'), 'section'],
    category: ystdbConfig.category.common,
    attributes: attributes,
    supports: supports,
    edit: edit,
    save: save,
    deprecated: deprecated,
};
