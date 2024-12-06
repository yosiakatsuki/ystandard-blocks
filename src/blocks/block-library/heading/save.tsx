/**
 * External dependencies
 */
import clsx from 'clsx';
/**
 * WordPress.
 */
import {
	getColorClassName,
	getFontSizeClass,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import {
	getBlockClasses,
	getHeadingTextClasses,
	getHeadingTextStyles,
} from '@aktk/blocks/block-library/heading/util';

// @ts-ignore
export default function Save( { attributes } ) {
	const { level, content, clearStyle, textColor, customTextColor } =
		attributes;

	// 見出しタグ.
	const tagName = `h${ level }`;

	// ブロック一番外側のプロパティなど.
	const blockProps = useBlockProps.save( {
		className: getBlockClasses( {
			...attributes,
		} ),
	} );

	// 見出しタグ本体のクラス.
	const textClasses = getHeadingTextClasses( {
		...attributes,
		textColor: getColorClassName( 'color', textColor ),
		hasTextColor: !! textColor || !! customTextColor,
		clearStyle,
	} );

	// 見出しタグ本体のstyle.
	const textStyles = getHeadingTextStyles( {
		textColor: customTextColor,
	} );

	return (
		<div { ...blockProps }>
			<div className={ `ystdb-heading__container` }>
				<RichText.Content
					// @ts-ignore
					tagName={ tagName }
					className={ textClasses }
					style={ textStyles }
					value={ content }
				/>
			</div>
		</div>
	);
}
