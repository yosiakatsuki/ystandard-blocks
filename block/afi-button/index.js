import edit from './edit';

const {registerBlockType} = wp.blocks;
const {withState} = wp.compose;
const {__} = wp.i18n;


registerBlockType('ystdb/afi-button', {
    title: 'アフィリエイトリンクボタンブロック',
    description: 'アフィリエイトリンクなど、入力したリンクをボタン形式で表示します。',
    icon: 'embed-generic',
    keywords: [__('link'), __('button'), 'button'],
    category: 'ystdb',
    attributes: {
        content: {
            type: "string"
        }
    },
    supports: {
        className: false
        // html: false,
    },
    edit: withState({isPreview: false, styles: ''})(edit),
    save() {
        return null;
    }
});