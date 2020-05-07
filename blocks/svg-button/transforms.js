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
					iconLeft: newIconLeft,
					iconRight: newIconRight,
					fontSize: attributes.fontSize,
					buttonType:
						attributes.buttonBlock === true
							? 'is-block'
							: undefined,
					paddingType: !! attributes.buttonSize
						? size[ attributes.buttonSize ]
						: undefined,
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
					align: attributes.align,
					backgroundColor: attributes.backgroundColor,
					customBackgroundColor: attributes.customBackgroundColor,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					url: attributes.url,
					linkTarget: attributes.linkTarget,
					rel: attributes.rel,
					iconLeft: newIconLeft,
					iconRight: newIconRight,
					fontSize: attributes.fontSize,
					buttonType:
						attributes.buttonBlock === true
							? 'is-block'
							: undefined,
					paddingType: !! attributes.buttonSize
						? size[ attributes.buttonSize ]
						: undefined,
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
