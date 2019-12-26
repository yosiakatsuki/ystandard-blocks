import { __ } from '@wordpress/i18n';

/**
 * attributes
 */
export const attributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: '',
	},
	align: {
		type: 'string',
		default: 'left',
	},
	subText: {
		type: 'string',
	},
	subTextSize: {
		type: 'string',
	},
	customSubTextSize: {
		type: 'string',
	},
	subTextColor: {
		type: 'string',
	},
	customSubTextColor: {
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
		type: 'string',
	},
};

export const supports = {
	className: false,
	anchor: true,
	__unstablePasteTextInline: true,
};
