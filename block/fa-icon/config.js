import {__} from '@wordpress/i18n';

/**
 * attributes
 */
export const attributes = {
    icon: {
        type: "string"
    },
    iconSize: {
        type: "string",
        default: "fa-5x"
    },
    align: {
        type: "string",
        default: "center"
    },
    textColor: {
        type: "string"
    },
    customTextColor: {
        type: "string"
    },
    fontSize: {
        type: "string",
    },
    customFontSize: {
        type: "string",
    },
    animating: {
        type: "string",
    },
    url: {
        type: "string",
    },
    linkTarget: {
        type: "string",
    },
    rel: {
        type: "string",
    },
};

export const supports = {
    align: false,
    className: false,
};

/**
 * サイズ
 */
export const sizing = [
    {
        value: 'fa-xs',
        label: __('0.75倍'),
    },
    {
        value: '',
        label: __('1倍'),
    },
    {
        value: 'fa-2x',
        label: __('2倍'),
    },
    {
        value: 'fa-3x',
        label: __('3倍'),
    },
    {
        value: 'fa-5x',
        label: __('5倍'),
    },
    {
        value: 'fa-10x',
        label: __('10倍'),
    },
];
