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
import {
	getCustomHeadingElementStyle,
	getHeadingGroupClasses,
	getMainTextClasses,
	getMainTextStyles,
} from './utils';

// @ts-expect-error
function Save( { attributes } ) {
	const { content, level, hasSubText, subText } = attributes as Attributes;
	const TagName = 'h' + level;

	// メインテキストのクラスとスタイルを生成.
	const mainTextClasses = getMainTextClasses();
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
	const subTextBlockSupportProps = getInnerBlockSupportProps( {
		style: getCustomHeadingElementStyle( attributes, 'sub' ),
	} );
	const subTextProps = {
		className: classnames(
			'ystdb-custom-heading-sub',
			subTextBlockSupportProps.className
		),
		style: subTextBlockSupportProps.style,
	};
	const groupBlockSupportProps = getInnerBlockSupportProps( {
		style: getCustomHeadingElementStyle( attributes, 'group' ),
	} );
	const groupProps = {
		className: classnames(
			getHeadingGroupClasses( attributes ),
			groupBlockSupportProps.className
		),
		style: groupBlockSupportProps.style,
	};

	// ブロックのpropsを生成.
	const blockProps = useBlockProps.save(
		hasSubText ? groupProps : mainTextProps
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
				{ ...subTextProps }
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
