import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/button' ],
			transform: ( attributes ) => {
				return createBlock( 'ystdb/svg-button', {
					text: attributes.text,
					borderRadius: attributes.borderRadius,
					align: attributes.align,
					backgroundColor: attributes.backgroundColor,
					customBackgroundColor: attributes.customBackgroundColor,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					url: attributes.url,
					linkTarget: attributes.linkTarget,
					rel: attributes.rel,
					fontSize: attributes.fontSize,
					customFontSize: attributes.customFontSize,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'ystdb/ys-btn' ],
			transform: ( attributes ) => {
				return createBlock( 'ystdb/svg-button', {
					text: attributes.text,
					borderRadius: attributes.borderRadius,
					iconSizeLeft: attributes.iconSizeLeft,
					iconSizeRight: attributes.iconSizeRight,
					align: attributes.align,
					backgroundColor: attributes.backgroundColor,
					customBackgroundColor: attributes.customBackgroundColor,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					fontSize: attributes.fontSize,
					customFontSize: attributes.customFontSize,
					url: attributes.url,
					linkTarget: attributes.linkTarget,
					rel: attributes.rel,
					paddingType: attributes.paddingType,
					buttonType: attributes.buttonType,
					maxWidth: attributes.maxWidth,
					maxUnit: attributes.maxUnit,
					animationType: attributes.animationType,
					animationInterval: attributes.animationInterval,
				} );
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: [ 'core/button' ],
			transform: ( attributes ) => {
				return createBlock( 'core/button', {
					text: attributes.text,
					borderRadius: attributes.borderRadius,
					align: attributes.align,
					backgroundColor: attributes.backgroundColor,
					customBackgroundColor: attributes.customBackgroundColor,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					url: attributes.url,
					linkTarget: attributes.linkTarget,
					rel: attributes.rel,
				} );
			},
		},
	],
};

export default transforms;
