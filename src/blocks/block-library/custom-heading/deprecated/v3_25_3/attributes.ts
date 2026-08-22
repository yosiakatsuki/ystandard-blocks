export const attributes = {
	content: {
		type: 'rich-text',
		source: 'rich-text',
		selector: 'h1,h2,h3,h4,h5,h6',
		role: 'content',
	},
	level: {
		type: 'number',
		default: 2,
	},
	textAlign: {
		type: 'string',
	},
	hasSubText: {
		type: 'boolean',
		default: false,
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
	responsiveFontSize: {
		type: 'object',
	},
	margin: {
		type: 'object',
	},
	responsiveMargin: {
		type: 'object',
	},
	padding: {
		type: 'object',
	},
	responsivePadding: {
		type: 'object',
	},
	lineHeight: {
		type: 'string',
	},
	letterSpacing: {
		type: 'string',
	},
	fontWeight: {
		type: 'string',
	},
	fontStyle: {
		type: 'string',
	},
	fontFamily: {
		type: 'string',
	},
	clearStyle: {
		type: 'boolean',
		default: true,
	},
	placeholder: {
		type: 'string',
	},
} as const;
