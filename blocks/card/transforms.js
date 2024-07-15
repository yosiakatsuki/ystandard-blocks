import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core-embed/wordpress', 'core/embed' ],
			transform: ( attributes ) => {
				return createBlock( 'ystdb/card', {
					url: attributes.url,
				} );
			},
		},
	],
};

export default transforms;
