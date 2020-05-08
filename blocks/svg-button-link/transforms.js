import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'ystdb/btn-link' ],
			transform: ( attributes ) => {
				return createBlock( 'ystdb/svg-button-link', {
					className: attributes.className,
					content: attributes.content,
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
};

export default transforms;
