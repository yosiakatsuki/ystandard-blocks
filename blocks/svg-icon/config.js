import { __ } from '@wordpress/i18n';
/**
 * attributes
 */
export const attributes = {
	icon: {
		type: 'string',
	},
	iconSize: {
		type: 'string',
		default: '5',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	fontSize: {
		type: 'string',
	},
	customFontSize: {
		type: 'string',
	},
	url: {
		type: 'string',
	},
	linkTarget: {
		type: 'string',
	},
	rel: {
		type: 'string',
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
		value: '',
		label: __( '1倍' ),
	},
	{
		value: '2',
		label: __( '2倍' ),
	},
	{
		value: '5',
		label: __( '5倍' ),
	},
];
