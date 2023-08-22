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
 * Plugin dependencies.
 */
import { InlineStyleCss } from '@aktk/blocks/components/inline-style-css';
import { SvgIcon } from '@aktk/blocks/components/svg-icon';

/**
 * Block
 */
import { InspectorControls } from './inspector-controls';
import {
	getLinkClasses,
	getLinkStyles,
	getWrapClasses,
	parseLinkInlineStyles,
} from './utils';
import { Icon } from './icon';
import './style-editor.scss';

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

	const { content, style, iconLeft, iconSizeLeft, iconRight, iconSizeRight } =
		attributes;

	const wrapProps = {
		className: getWrapClasses({
			clientId,
			className,
			...attributes,
		}),
	};
	const linkProps = {
		className: getLinkClasses(attributes),
		style: getLinkStyles(attributes),
	};

	return (
		<>
			<InspectorControls {...props} />

			<div {...useBlockProps({})}>
				<div {...wrapProps}>
					{/* @ts-expect-error */}
					<div {...linkProps}>
						<Icon
							hasIcon={iconLeft || iconRight}
							icon={iconLeft}
							size={iconSizeLeft}
						/>
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
						<Icon
							hasIcon={iconLeft || iconRight}
							icon={iconRight}
							size={iconSizeRight}
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
