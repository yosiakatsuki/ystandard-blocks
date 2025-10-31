/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';

// @ts-expect-error
function Save( { attributes } ) {
	const { textAlign, content, level } = attributes as Attributes;
	const TagName = 'h' + level;
	const blockProps = useBlockProps.save( {
		className: 'ystdb-custom-heading',
	} );

	return (
		// @ts-ignore
		<TagName { ...blockProps }>
			<RichText.Content value={ content } />
		</TagName>
	);
}
export default Save;
