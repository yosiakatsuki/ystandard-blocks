import { __ } from '@wordpress/i18n';

/**
 * attributes
 */
export const attributes = {
	text: {
		type: 'string',
		source: 'html',
		selector: '.ystdb-button__text',
	},
	borderRadius: {
		type: 'number',
		default: 4,
	},
	iconLeft: {
		type: 'string',
	},
	iconSizeLeft: {
		type: 'string',
		default: '',
	},
	iconRight: {
		type: 'string',
	},
	iconSizeRight: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
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
		type: 'number',
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
	paddingType: {
		type: 'string',
		default: '',
	},
	buttonType: {
		type: 'string',
	},
	maxWidth: {
		type: 'number',
		default: 100,
	},
	maxUnit: {
		type: 'string',
		default: '%',
	},
	animationType: {
		type: 'string',
		default: 'none',
	},
	animationInterval: {
		type: 'number',
		default: 5,
	},
};

export const supports = {
	align: false,
	className: false,
};

export const iconSize = [
	{
		value: 'fa-xs',
		label: __('小'),
	},
	{
		value: '',
		label: __('中'),
	},
	{
		value: 'fa-2x',
		label: __('大'),
	},
];
