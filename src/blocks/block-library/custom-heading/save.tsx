import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Aktk dependencies.
 */
import { getInnerBlockSupportProps } from '@aktk/block-components/utils/block-supports';

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
	const mainBlockSupportProps = getInnerBlockSupportProps( attributes );
	const mainTextProps = {
		className: classnames(
			mainTextClasses,
			mainBlockSupportProps.className
		),
		style: {
			...mainBlockSupportProps.style,
			...mainTextStyles,
		},
	};

	// ブロックのpropsを生成.
	const blockProps = useBlockProps.save(
		hasSubText ? { className: 'ystdb-custom-heading-group' } : mainTextProps
	);

	return hasSubText ? (
		<hgroup { ...blockProps }>
			<RichText.Content
				// @ts-ignore
				tagName={ TagName }
				{ ...mainTextProps }
				value={ content }
			/>
			<RichText.Content
				tagName="p"
				className="ystdb-custom-heading-sub"
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
