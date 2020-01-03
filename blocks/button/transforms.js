import {
	createBlock,
} from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/button' ],
			transform: ( attributes ) => {
				const newIconLeft = attributes.iconPosition === 'left' && !! attributes.icon ? attributes.icon : undefined;
				const newIconRight = attributes.iconPosition === 'right' && !! attributes.icon ? attributes.icon : undefined;
				const size = {
					lg: 'is-large',
					sm: 'is-small',
				};

				return createBlock( 'ystdb/ys-btn', {
					text: attributes.text.replace( /<i.+class=".+?">.*?<\/i>/g, '' ),
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
					buttonType: attributes.buttonBlock === true ? 'is-block' : undefined,
					paddingType: !! attributes.buttonSize ? size[ attributes.buttonSize ] : undefined,
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
