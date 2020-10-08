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
	backgroundImageOnOverlay: {
		type: 'bool',
		default: false,
	},
	backgroundImageOnOverlayOpacity: {
		type: 'integer',
		default: 80,
	},
};
