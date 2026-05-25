/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';
import { getMainTextClasses, getMainTextStyles } from './utils';

// @ts-expect-error
function Save( { attributes } ) {
	const { content, level } = attributes as Attributes;
	const TagName = 'h' + level;

	// メインテキストのクラスとスタイルを生成.
	const mainTextClasses = getMainTextClasses( attributes );
	const mainTextStyles = getMainTextStyles( attributes );

	// ブロックのpropsを生成.
	const blockProps = useBlockProps.save( {
		className: mainTextClasses,
		style: mainTextStyles,
	} );

	return (
		// @ts-ignore
		<TagName { ...blockProps }>
			<RichText.Content value={ content } />
		</TagName>
	);
}
export default Save;
