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
	const { content, level, hasSubText, subText } = attributes as Attributes;
	const TagName = 'h' + level;

	// メインテキストのクラスとスタイルを生成.
	const mainTextClasses = getMainTextClasses( attributes );
	const mainTextStyles = getMainTextStyles( attributes );

	// ブロックのpropsを生成.
	const blockProps = useBlockProps.save( {
		className: mainTextClasses,
		style: mainTextStyles,
	} );

	return hasSubText ? (
		<hgroup { ...blockProps }>
			<RichText.Content
				// @ts-ignore
				tagName={ TagName }
				className="ystdb-custom-heading__main"
				value={ content }
			/>
			<RichText.Content
				tagName="p"
				className="ystdb-custom-heading__sub"
				value={ subText || '' }
			/>
		</hgroup>
	) : (
		<RichText.Content
			// @ts-ignore
			tagName={ TagName }
			value={ content }
			{ ...blockProps }
		/>
	);
}
export default Save;
