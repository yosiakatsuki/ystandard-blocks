import {
    createBlock,
    getBlockAttributes,
} from '@wordpress/blocks';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/button'],
            transform: (attributes) => {
                return createBlock('ystdb/ys-btn', {
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
    to: [
        {
            type: 'block',
            blocks: ['core/button'],
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
