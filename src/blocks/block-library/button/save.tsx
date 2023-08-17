/**
 * WordPress dependencies.
 */
import {
	RichText,
	getColorClassName,
	getFontSizeClass,
	useBlockProps,
} from '@wordpress/block-editor';
import { getLinkClasses, getWrapClasses } from './utils';

// @ts-expect-error
function Save({ attributes }) {
	const { content, url } = attributes;

	const blockProps = useBlockProps.save({
		className: getWrapClasses({ ...attributes }),
	});

	const linkClasses = getLinkClasses({});
	return (
		<>
			<div {...blockProps}>
				<a href={url} className={linkClasses}>
					<RichText.Content
						tagName={'span'}
						value={content}
						className={'ystdb-custom-button__content'}
					/>
				</a>
			</div>
		</>
	);
}

export default Save;
