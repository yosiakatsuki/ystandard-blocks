import edit from './edit';

const {registerBlockType} = wp.blocks;
const {withColors, withFontSizes} = wp.editor;
const {compose, withState} = wp.compose;
const {__} = wp.i18n;


registerBlockType('ystdb/btn-link', {
    title: __('ボタン型リンク', 'ystandard-blocks'),
    description: __('入力したリンク(a)タグをボタン形式で表示するブロック', 'ystandard-blocks'),
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
        },
        icon: {
            type: "string"
        },
        align: {
            type: "string"
        },
        buttonType: {
            type: "string"
        },
        customIcon: {
            type: "string"
        },
        iconPosition: {
            type: "string",
            default: "right"
        },
        buttonSize: {
            type: "string",
            default: ""
        },
        fontSize: {
            type: "string",
        },
        customFontSize: {
            type: "integer",
        }
    },
    supports: {
        className: false,
        html: false
    },
    edit: compose([
        withColors('backgroundColor', {textColor: 'color'}),
        withState({isPreview: false, styles: ''}),
        withFontSizes('fontSize'),
    ])(edit),
    save() {
        return null;
    }
});