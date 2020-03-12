/**
 * attributes
 */
export const attributes = {
	url: {
		type: 'string',
	},
	linkTarget: {
		type: 'string',
	},
	rel: {
		type: 'string',
	},
	cardType: {
		type: 'string',
		default: 'horizon',
	},
	title: {
		type: 'string',
	},
	showImage: {
		type: 'bool',
		default: true,
	},
	imageSize: {
		type: 'string',
	},
	imageType: {
		type: 'string',
	},
	imageAlign: {
		type: 'string',
		default: 'left',
	},
	imageURL: {
		type: 'string',
	},
	imageAlt: {
		type: 'string',
	},
	imageID: {
		type: 'integer',
		default: 0,
	},
	showDscr: {
		type: 'bool',
		default: true,
	},
	dscrCharCount: {
		type: 'number',
		default: 80,
	},
	dscr: {
		type: 'string',
	},
	showDomain: {
		type: 'bool',
		default: true,
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	borderColor: {
		type: 'string',
	},
	customBorderColor: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	customTitleColor: {
		type: 'string',
	},
	dscrColor: {
		type: 'string',
	},
	customDscrColor: {
		type: 'string',
	},
	domainColor: {
		type: 'string',
	},
	customDomainColor: {
		type: 'string',
	},
};
/**
 * supports
 */
export const supports = {
	className: false,
	html: false,
	align: false,
};

export const cardTypes = [
	{ label: '横型', value: 'horizon' },
	{ label: '縦型', value: 'vertical' },
	{ label: 'モバイルでも横型', value: 'fixed-horizon' },
];
export const imageSizes = [
	{ label: '小', value: 'small' },
	{ label: '通常', value: 'normal' },
	{ label: '大', value: 'large' },
];

export const imageTypes = [
	{ label: 'テキストに合わせる', value: 'fitText' },
	{ label: '画像をすべて表示', value: 'showAll' },
];

export const imageAlignList = [
	{ label: '左', value: 'left' },
	{ label: '右', value: 'right' },
];
