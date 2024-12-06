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
 * Plugin dependencies.
 */
import {
	getDeprecatedFontResponsiveClass,
	getDeprecatedFontResponsiveStyle,
} from '@aktk/blocks/deprecated/components/responsive-font-size';

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
	const {
		level,
		content,
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
		useFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		clearStyle,
	} = attributes;

	// 見出しタグ.
	const tagName = `h${ level }`;

	// ブロック一番外側のプロパティなど.
	const blockProps = useBlockProps.save( {
		className: clsx(
			getBlockClasses( {
				className: attributes?.className || '',
			} ),
			{
				...getDeprecatedFontResponsiveClass(
					useFontSizeResponsive,
					fontSizeMobile,
					fontSizeTablet,
					fontSizeDesktop
				),
			}
		),
		style: {
			...getDeprecatedFontResponsiveStyle( {
				isResponsive: useFontSizeResponsive,
				desktop: fontSizeDesktop,
				tablet: fontSizeTablet,
				mobile: fontSizeMobile,
			} ),
		},
	} );

	// 見出しタグ : 文字サイズクラス
	const fontSizeClass = getFontSizeClass( fontSize );

	// 見出しタグ本体のクラス.
	const textClasses = getHeadingTextClasses( {
		...attributes,
		textColor: getColorClassName( 'color', textColor ),
		hasTextColor: !! textColor || !! customTextColor,
		fontSize: fontSizeClass,
		useFontSizeResponsive,
		clearStyle,
	} );

	// 見出しタグ本体のstyle.
	const textStyles = getHeadingTextStyles( {
		textColor: customTextColor,
		fontSize: ! fontSizeClass ? customFontSize : undefined,
		useFontSizeResponsive,
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
