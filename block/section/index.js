import edit from './edit';
import save from './save';
import { deprecated } from './_deprecated';

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
        marginTop: {
            type: "number",
            default: 2
        },
        marginBottom: {
            type: "number",
            default: 2
        },
        paddingTop: {
            type: "number",
            default: 3
        },
        paddingBottom: {
            type: "number",
            default: 3
        },
        paddingLeft: {
            type: "number",
            default: 0
        },
        paddingRight: {
            type: "number",
            default: 0
        },
        innerCustomWidth: {
            type: "integer",
            default: 960,
        },
        backgroundImageURL: {
            type: "string"
        },
        backgroundImageAlt: {
            type: "string"
        },
        backgroundImageID: {
            type: "integer",
            default: 0,
        },
        backgroundImageOpacity: {
            type: "integer",
            default: 50
        },
        backgroundSkew: {
            type: "number",
            default: 0
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
    save: save,
    deprecated: deprecated,
});