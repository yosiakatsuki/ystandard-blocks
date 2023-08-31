/**
 * WordPress dependencies.
 */
import {
	RichText,
	getColorClassName,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Plugin dependencies.
 */
import { getFontSize } from '@aktk/blocks/components/font-size-edit';

/**
 * Block.
 */
import { getLinkClasses, getLinkStyles, getWrapClasses } from './utils';
import { Icon } from './icon';

// @ts-expect-error
function Save({ attributes }) {
	const {
		content,
		url,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: getWrapClasses({ ...attributes }),
	});

	const textColorClass = getColorClassName('color', textColor);
	const textColorStyle = !textColorClass ? customTextColor : undefined;

	const linkClasses = getLinkClasses({
		...attributes,
		textColor: textColorClass,
		fontSize: getFontSize(customFontSize, fontSize)?.className,
	});
	const linkStyles = getLinkStyles({
		...attributes,
		textColor: textColorStyle,
		fontSize: getFontSize(customFontSize, fontSize)?.size,
	});
	return (
		<>
			<div {...blockProps}>
				<a href={url} className={linkClasses} style={linkStyles}>
					<Icon.Content
						hasIcon={iconLeft || iconRight}
						icon={iconLeft}
						size={iconSizeLeft}
					/>
					<RichText.Content
						tagName={'span'}
						value={content}
						className={'ystdb-custom-button__content'}
					/>
					<Icon.Content
						hasIcon={iconLeft || iconRight}
						icon={iconRight}
						size={iconSizeRight}
					/>
				</a>
			</div>
		</>
	);
}

export default Save;
