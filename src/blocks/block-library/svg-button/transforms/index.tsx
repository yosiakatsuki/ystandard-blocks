import { createBlock } from '@wordpress/blocks';

const transforms = {
	to: [
		{
			type: 'block',
			blocks: ['core/button'],
			// @ts-ignore
			transform: (attributes) => {
				return createBlock('core/button', {
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
				});
			},
		},
	],
};

export default transforms;
