import edit from './edit';
import save from './save';

const {registerBlockType} = wp.blocks;
const {withColors} = wp.editor;
const {compose} = wp.compose;
const {__} = wp.i18n;


registerBlockType('ystdb/section', {
    title: __('[ys]セクション', 'ystandard-blocks'),
    description: __('yStandard Blocks汎用セクションブロック', 'ystandard-blocks'),
    icon: 'screenoptions',
    keywords: [__('section'), __('セクション'), 'section'],
    category: 'ystdb',
    attributes: {
        wrapperTag: {
            type: "string",
            default: "div"
        },
        backgroundColor: {
            type: "string"
        },
        customBackgroundColor: {
            type: "string"
        },
        textColor: {
            type: "string"
        },
        customTextColor: {
            type: "string"
        },
        margin: {
            type: "string",
            default: "normal", //normal,wide,narrow
        },
        marginTop: {
            type: "integer",
            default: 24
        },
        marginBottom: {
            type: "integer",
            default: 24
        },
        padding: {
            type: "string",
            default: "normal", //normal,wide,narrow
        },
        paddingTop: {
            type: "integer",
            default: 32
        },
        paddingBottom: {
            type: "integer",
            default: 32
        },
        innerWidth: {
            type: "string",
            default: "normal", //normal,narrow
        },
        innerCustomWidth: {
            type: "integer",
            default: 0,
        }
    },
    supports: {
        align: ['wide', 'full'],
        anchor: true,
        className: false,
    },
    edit: compose([
        withColors('backgroundColor', {textColor: 'color'}),
    ])(edit),
    save: save
});