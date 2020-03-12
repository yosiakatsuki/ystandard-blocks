import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/group' ],
			transform: ( attributes, innerBlocks ) => {
				return createBlock( 'ystdb/conditional-group-block', {}, innerBlocks );
			},
		},
	],
};

export default transforms;
