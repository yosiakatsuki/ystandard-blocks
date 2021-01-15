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
	isFontSizeResponsive: {
		type: 'bool',
		default: false,
	},
	fontSizeMobile: {
		type: 'number',
	},
	fontSizeTablet: {
		type: 'number',
	},
	fontSizeDesktop: {
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
	isPaddingVerticalResponsive: {
		type: 'bool',
	},
	paddingVerticalDesktop: {
		type: 'number',
	},
	paddingVerticalTablet: {
		type: 'number',
	},
	paddingVerticalMobile: {
		type: 'number',
	},
	isPaddingHorizontalResponsive: {
		type: 'bool',
	},
	paddingHorizontalDesktop: {
		type: 'number',
	},
	paddingHorizontalTablet: {
		type: 'number',
	},
	paddingHorizontalMobile: {
		type: 'number',
	},
	buttonBlockDesktop: {
		type: 'bool',
	},
	buttonBlockTablet: {
		type: 'bool',
	},
	buttonBlockMobile: {
		type: 'bool',
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
