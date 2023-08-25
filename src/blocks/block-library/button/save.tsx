/**
 * WordPress dependencies.
 */
import {
	RichText,
	getColorClassName,
	getFontSizeClass,
	useBlockProps,
} from '@wordpress/block-editor';
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
	} = attributes;

	const blockProps = useBlockProps.save({
		className: getWrapClasses({ ...attributes }),
	});

	const textColorClass = getColorClassName('color', attributes?.textColor);
	const textColorStyle = !textColorClass ? customTextColor : undefined;

	const linkClasses = getLinkClasses({
		...attributes,
		textColor: textColorClass,
	});
	const linkStyles = getLinkStyles({
		...attributes,
		textColor: textColorStyle,
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
