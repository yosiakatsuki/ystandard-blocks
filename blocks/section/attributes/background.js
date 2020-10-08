export const background = {
	backgroundType: {
		type: 'string',
		default: 'image',
	},
	focalPoint: {
		type: 'object',
	},
	backgroundImageURL: {
		type: 'string',
	},
	backgroundImageAlt: {
		type: 'string',
	},
	backgroundImageID: {
		type: 'integer',
		default: 0,
	},
	backgroundImageOpacity: {
		type: 'integer',
		default: 100,
	},
	backgroundImageParallax: {
		type: 'bool',
		default: false,
	},
	backgroundImageSize: {
		type: 'string',
	},
	backgroundImageSizeX: {
		type: 'string',
	},
	backgroundImageSizeUnitX: {
		type: 'string',
		default: 'px',
	},
	backgroundImageSizeY: {
		type: 'string',
	},
	backgroundImageSizeUnitY: {
		type: 'string',
		default: 'px',
	},
	backgroundImageRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
};
