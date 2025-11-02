/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';
import { getHeadingClasses, getHeadingStyles } from './utils';

// @ts-expect-error
function Save( { attributes } ) {
	const { content, level } = attributes as Attributes;
	const TagName = 'h' + level;
	const blockProps = useBlockProps.save( {
		className: getHeadingClasses( attributes ),
		style: getHeadingStyles( attributes ),
	} );

	return (
		// @ts-ignore
		<TagName { ...blockProps }>
			<RichText.Content value={ content } />
		</TagName>
	);
}
export default Save;
