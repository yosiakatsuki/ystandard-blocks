/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Deprecated dependencies.
 */
import type { LegacyAttributes } from './types';
import { getMainTextClasses, getMainTextStyles } from './utils';

// @ts-expect-error
export function save( { attributes } ) {
	const { content, level } = attributes as LegacyAttributes;
	const TagName = 'h' + level;
	const blockProps = useBlockProps.save( {
		className: getMainTextClasses( attributes ),
		style: getMainTextStyles( attributes ),
	} );

	return (
		// @ts-ignore
		<TagName { ...blockProps }>
			<RichText.Content value={ content } />
		</TagName>
	);
}
