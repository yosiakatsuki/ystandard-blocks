/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps,
	// @ts-expect-error
	__experimentalGetGradientClass as getGradientClass,
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
import type { Attributes } from './types';

// @ts-expect-error
function Save({ attributes }) {
	const {
		content = '',
		url,
		iconLeft,
		iconSizeLeft,
		iconRight,
		iconSizeRight,
		fontSize,
		customFontSize,
		gradient,
		linkTarget,
		rel,
	} = attributes as Attributes;

	const blockProps = useBlockProps.save({
		className: getWrapClasses({ ...attributes }),
	});

	const linkClasses = getLinkClasses({
		...attributes,
		fontSize: getFontSize(customFontSize, fontSize)?.className,
		gradientClass: getGradientClass(gradient),
	});
	const linkStyles = getLinkStyles({
		...attributes,
		fontSize: getFontSize(customFontSize, fontSize)?.size,
	});
	return (
		<>
			<div {...blockProps}>
				<a
					href={url}
					className={linkClasses}
					style={linkStyles}
					target={linkTarget || undefined}
					rel={rel || undefined}
				>
					<Icon.Content
						hasIcon={!!iconLeft || !!iconRight}
						icon={iconLeft}
						size={iconSizeLeft}
					/>
					<RichText.Content
						tagName={'span'}
						value={content}
						className={'ystdb-custom-button__content'}
					/>
					<Icon.Content
						hasIcon={!!iconLeft || !!iconRight}
						icon={iconRight}
						size={iconSizeRight}
					/>
				</a>
			</div>
		</>
	);
}

export default Save;
