import edit from './edit';

const {registerBlockType} = wp.blocks;
const {withColors} = wp.editor;
const {compose, withState} = wp.compose;
const {__} = wp.i18n;


registerBlockType('ystdb/btn-link', {
    title: 'ボタン型リンク',
    description: '入力したリンク(a)タグをボタン形式で表示するブロック',
    icon: 'embed-generic',
    keywords: [__('link'), __('button'), 'button'],
    category: 'ystdb',
    attributes: {
        content: {
            type: "string"
        },
        backgroundColor: {
            type: "string"
        },
        textColor: {
            type: "string"
        },
        customBackgroundColor: {
            type: "string"
        },
        customTextColor: {
            type: "string"
        }
    },
    supports: {
        className: false
        // html: false,
    },
    edit: compose([
        withColors('backgroundColor', {textColor: 'color'}),
        withState({isPreview: false, styles: ''})
    ])(edit),
    save() {
        return null;
    }
});