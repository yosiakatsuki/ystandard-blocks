import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: ['core/heading'],
			transform: (attributes) => {
				return createBlock('ystdb/heading', {
					content: attributes.content,
					align: attributes.align,
					level: attributes.level,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
				});
			},
		},
	],
	to: [
		{
			type: 'block',
			blocks: ['core/heading'],
			transform: (attributes) => {
				return createBlock('core/heading', {
					content: attributes.content,
					align: attributes.align,
					level: attributes.level,
					textColor: attributes.textColor,
					customTextColor: attributes.customTextColor,
				});
			},
		},
	],
};

export default transforms;
