/**
 * WordPress dependencies.
 */
import {
	useBlockProps,
	RichText,
	withColors,
	// @ts-expect-error
	__experimentalUseGradient,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

/**
 * Plugin dependencies.
 */
import { getFontSize } from '@aktk/blocks/components/font-size-edit';

/**
 * Block
 */
import { InspectorControls } from './inspector-controls';
import { getLinkClasses, getLinkStyles, getWrapClasses } from './utils';
import { Icon } from './icon';
import './style-editor.scss';
import type { Attributes } from '@aktk/blocks/block-library/button/types';

// @ts-expect-error
function Edit(props) {
	const { gradientClass, gradientValue, setGradient } =
		__experimentalUseGradient();
	const {
		textColor,
		backgroundColor,
		attributes,
		setAttributes,
		className,
		clientId,
	} = props;

	const {
		content,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		fontSize,
		customFontSize,
	} = attributes as unknown as Attributes;

	const wrapProps = {
		className: getWrapClasses({
			clientId,
			className,
			...attributes,
		}),
	};
	const linkProps = {
		className: getLinkClasses({
			...attributes,
			fontSize: getFontSize(customFontSize, fontSize)?.className,
			gradientClass,
		}),
		style: getLinkStyles({
			...attributes,
			textColor: textColor?.color,
			backgroundColor: backgroundColor?.color,
			fontSize: getFontSize(customFontSize, fontSize)?.size,
			customGradient: gradientValue,
		}),
	};
	const inspectorControlsProps = {
		...props,
		gradientValue,
		setGradient,
	};

	return (
		<>
			<InspectorControls {...inspectorControlsProps} />

			<div {...useBlockProps({})}>
				<div {...wrapProps}>
					<div {...linkProps}>
						<Icon
							hasIcon={!!iconLeft || !!iconRight}
							icon={iconLeft}
							size={iconSizeLeft}
						/>
						<RichText
							tagName={'span'}
							placeholder={__('テキスト…', 'ystandard-blocks')}
							value={content || ''}
							onChange={(value) =>
								setAttributes({ content: value })
							}
							// @ts-ignore
							withoutInteractiveFormatting
							className={'ystdb-custom-button__content'}
						/>
						<Icon
							hasIcon={!!iconLeft || !!iconRight}
							icon={iconRight}
							size={iconSizeRight}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

// @ts-expect-error
export default compose([withColors('backgroundColor', { textColor: 'color' })])(
	Edit
);
