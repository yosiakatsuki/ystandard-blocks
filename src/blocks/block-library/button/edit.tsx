import classnames from 'classnames';
/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	RichText,
	withColors,
	withFontSizes,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Block
 */
import { InspectorControls } from './inspector-controls';
import {
	getLinkClasses,
	getWrapClasses,
	parseInlineStyles,
	parseLinkInlineStyles,
} from './utils';
import './style-editor.scss';
import { InlineStyleCss } from '@aktk/blocks/components/inline-style-css';

// @ts-expect-error
function Edit(props) {
	const {
		textColor,
		backgroundColor,
		attributes,
		setAttributes,
		isSelected,
		fontSize,
		className,
		clientId,
	} = props;

	const { content, style } = attributes;

	const wrapProps = {
		className: getWrapClasses({
			[`ystdb-block-${clientId}`]: true,
			[className]: !!className,
		}),
	};
	const linkProps = {
		className: getLinkClasses({}),
	};

	return (
		<>
			<InspectorControls {...props} />

			<div {...useBlockProps({})}>
				<div {...wrapProps}>
					<div {...linkProps}>
						<RichText
							tagName={'span'}
							placeholder={__('テキスト…', 'ystandard-blocks')}
							value={content}
							onChange={(value) =>
								setAttributes({ content: value })
							}
							// @ts-ignore
							withoutInteractiveFormatting
							className={'ystdb-custom-button__content'}
						/>
					</div>
				</div>
			</div>
			<InlineStyleCss
				clientId={clientId}
				styles={parseLinkInlineStyles(style)}
				selector={'.ystdb-custom-button__link'}
			/>
		</>
	);
}

// @ts-expect-error
export default compose([
	withColors('backgroundColor', { textColor: 'color' }),
	withFontSizes('fontSize'),
])(Edit);
