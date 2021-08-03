export const blockAttributes = {
	content: {
		type: 'string',
	},
	borderRadius: {
		type: 'number',
		default: 4,
	},
	iconLeft: {
		type: 'string',
	},
	iconLeftSVG: {
		type: 'string',
	},
	iconSizeLeft: {
		type: 'string',
		default: '',
	},
	iconRight: {
		type: 'string',
	},
	iconRightSVG: {
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
export const blockSupports = {
	className: false,
	html: false,
};

export const deprecated2101 = [
	{
		attributes: {
			...blockAttributes,
		},
		supports: {
			...blockSupports,
		},
		migrate(attributes) {
			let newFontSize = attributes.customFontSize;
			if ('number' === typeof newFontSize) {
				newFontSize = newFontSize.toString().replace('px', '') + 'px';
			}
			return {
				...attributes,
				customFontSize: newFontSize,
			};
		},
	},
];
