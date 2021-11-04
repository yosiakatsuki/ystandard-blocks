const attributes = {
	align: {
		type: 'string',
		default: 'full',
	},
	marginTop: {
		type: 'number',
		default: 0,
	},
	marginTopResponsive: {
		type: 'bool',
		default: false,
	},
	marginTopMobile: {
		type: 'number',
		default: 0,
	},
	marginBottom: {
		type: 'number',
		default: 0,
	},
	marginBottomResponsive: {
		type: 'bool',
		default: false,
	},
	marginBottomMobile: {
		type: 'number',
		default: 0,
	},
	paddingTop: {
		type: 'number',
		default: 80,
	},
	paddingTopResponsive: {
		type: 'bool',
		default: false,
	},
	paddingTopMobile: {
		type: 'number',
		default: 0,
	},
	paddingBottom: {
		type: 'number',
		default: 80,
	},
	paddingBottomResponsive: {
		type: 'bool',
		default: false,
	},
	paddingBottomMobile: {
		type: 'number',
		default: 0,
	},
	paddingLeft: {
		type: 'number',
		default: 0,
	},
	paddingLeftResponsive: {
		type: 'bool',
		default: false,
	},
	paddingLeftMobile: {
		type: 'number',
		default: 0,
	},
	paddingRight: {
		type: 'number',
		default: 0,
	},
	paddingRightResponsive: {
		type: 'bool',
		default: false,
	},
	paddingRightMobile: {
		type: 'number',
		default: 0,
	},
	paddingRightPreferred: {
		type: 'number',
		default: 10,
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	gradient: {
		type: 'string',
	},
	customGradient: {
		type: 'string',
	},
	useCustomOverlaySize: {
		type: 'bool',
		default: false,
	},
	overlaySizeX: {
		type: 'string',
		default: '100',
	},
	overlaySizeUnitX: {
		type: 'string',
		default: '%',
	},
	overlaySizeY: {
		type: 'string',
		default: '100',
	},
	overlaySizeUnitY: {
		type: 'string',
		default: '%',
	},
	overlayPositionX: {
		type: 'string',
		default: 'top',
	},
	overlayPositionValueX: {
		type: 'string',
		default: '0',
	},
	overlayPositionUnitX: {
		type: 'string',
		default: '%',
	},
	overlayPositionY: {
		type: 'string',
		default: 'left',
	},
	overlayPositionValueY: {
		type: 'string',
		default: '0',
	},
	overlayPositionUnitY: {
		type: 'string',
		default: '%',
	},
	backgroundImageOpacity: {
		type: 'integer',
		default: 100,
	},
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
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	dividerTypeTop: {
		type: 'string',
		default: 'skew',
	},
	dividerTopReverse: {
		type: 'bool',
		default: false,
	},
	dividerTopResponsive: {
		type: 'bool',
		default: false,
	},
	dividerLevelTop: {
		type: 'number',
		default: 0,
	},
	dividerLevelTopMobile: {
		type: 'number',
		default: 0,
	},
	dividerColorTop: {
		type: 'string',
	},
	customDividerColorTop: {
		type: 'string',
	},
	dividerTypeBottom: {
		type: 'string',
		default: 'skew',
	},
	dividerBottomReverse: {
		type: 'bool',
		default: false,
	},
	dividerBottomResponsive: {
		type: 'bool',
		default: false,
	},
	dividerLevelBottom: {
		type: 'number',
		default: 0,
	},
	dividerLevelBottomMobile: {
		type: 'number',
		default: 0,
	},
	dividerColorBottom: {
		type: 'string',
	},
	customDividerColorBottom: {
		type: 'string',
	},
	innerCustomWidth: {
		type: 'integer',
		default: 0,
	},
	screenHeightMode: {
		type: 'bool',
		default: false,
	},
	sectionMinHeight: {
		type: 'number',
		default: 0,
	},
	animationType: {
		type: 'string',
		default: 'none',
	},
	animationSpeed: {
		type: 'number',
		default: 2,
	},
	animationDelay: {
		type: 'number',
		default: 0,
	},
	wrapperTag: {
		type: 'string',
		default: 'div',
	},
	containerFluid: {
		type: 'bool',
		default: false,
	},
};

export default attributes;
