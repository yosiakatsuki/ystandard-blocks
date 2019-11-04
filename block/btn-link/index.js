import {ystdbConfig} from '../../src/js/config/config';
import deprecated from './_deprecated';
import edit from './edit';
import {attributes,supports} from './config';

import {__} from '@wordpress/i18n';

export const name = 'ystdb/btn-link';

export const settings = {
    title: __('ボタン型リンク', 'ystandard-blocks'),
    description: __('入力したリンク(a)タグをボタン形式で表示するブロック', 'ystandard-blocks'),
    icon: 'embed-generic',
    keywords: [__('link'), __('button'), 'button'],
    category: ystdbConfig.category.common,
    attributes: attributes,
    supports: supports,
    edit: edit,
    save() {
        return null;
    },
    deprecated:deprecated,
};
