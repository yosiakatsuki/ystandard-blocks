import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: ['ystdb/fa-icon'],
			transform: (attributes) => {
				return createBlock('ystdb/svg-icon', {
					className: attributes.className,
					align: attributes.align,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
					backgroundColor: attributes.backgroundColor,
					customBackgroundColor: attributes.customBackgroundColor,
					fontSize: attributes.fontSize,
					customFontSize: attributes.customFontSize,
					url: attributes.url,
					linkTarget: attributes.linkTarget,
					rel: attributes.rel,
				});
			},
		},
	],
};

export default transforms;
