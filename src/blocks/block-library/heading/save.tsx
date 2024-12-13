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
import { getDeprecatedFontResponsiveClass } from '@aktk/blocks/deprecated/components/responsive-font-size';

/**
 * Internal dependencies.
 */
import {
	getBlockClasses,
	getBlockStyles,
	getHeadingTextClasses,
	getHeadingTextStyles,
	getSubTextClasses,
	getSubTextStyles,
} from '@aktk/blocks/block-library/heading/util';
import type { AttributeType } from '@aktk/blocks/block-library/heading/type';
import { Divider } from '@aktk/blocks/block-library/heading/component';

// @ts-ignore
export default function Save( { attributes } ) {
	const {
		level,
		align,
		content,
		textColor,
		customTextColor,
		fontSize,
		customFontSize,
		useFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		subText,
		subTextColor,
		customSubTextColor,
		subTextPosition,
		subTextSize,
		customSubTextSize,
		useSubTextSizeResponsive,
		subTextBorderWidth,
		subTextBorderHeight,
		dividerColor,
		customDividerColor,
		dividerMarginTop,
		dividerMarginBottom,
		dividerImageURL,
		dividerImageAlt,
	} = attributes as AttributeType;

	// 見出しタグ.
	const tagName = `h${ level }`;

	// ブロック一番外側のプロパティなど.
	const blockProps = useBlockProps.save( {
		className: clsx( getBlockClasses( attributes ), {
			...getDeprecatedFontResponsiveClass(
				useFontSizeResponsive,
				fontSizeMobile,
				fontSizeTablet,
				fontSizeDesktop
			),
		} ),
		style: {
			...getBlockStyles( attributes ),
		},
	} );

	// 見出しタグ : 文字サイズクラス
	const fontSizeClass = getFontSizeClass( fontSize || '' );

	// 見出しタグ本体のクラス.
	const textClasses = getHeadingTextClasses( {
		...attributes,
		textColor: getColorClassName( 'color', textColor ),
		hasTextColor: !! textColor || !! customTextColor,
		fontSize: fontSizeClass,
	} );

	// 見出しタグ本体のstyle.
	const textStyles = getHeadingTextStyles( {
		...attributes,
		textColor: customTextColor,
		fontSize: ! fontSizeClass ? customFontSize : undefined,
	} );

	// サブテキスト.
	const SubTextContent = () => {
		const subTextClasses = getSubTextClasses( {
			...attributes,
			subTextColor: getColorClassName( 'color', subTextColor ),
			hasSubTextSize:
				subTextSize || customSubTextSize || useSubTextSizeResponsive,
			subTextSize:
				! useSubTextSizeResponsive &&
				getFontSizeClass( subTextSize || '' ),
		} );
		const subTextStyles = getSubTextStyles( {
			...attributes,
			subTextColor: customSubTextColor,
			subTextSize: ! useSubTextSizeResponsive
				? customSubTextSize
				: undefined,
		} );

		return (
			<div
				className={ subTextClasses }
				style={ subTextStyles }
				aria-hidden={ 'true' }
				data-text={ subText }
			/>
		);
	};

	const SubTextDivider = () => {
		return (
			<Divider
				width={ subTextBorderWidth }
				height={ subTextBorderHeight }
				color={ customDividerColor }
				colorClass={ getColorClassName( 'fill', dividerColor ) }
				marginTop={ dividerMarginTop }
				marginBottom={ dividerMarginBottom }
				image={ {
					url: dividerImageURL,
					alt: dividerImageAlt,
				} }
				align={ align }
			/>
		);
	};

	return (
		<div { ...blockProps }>
			<div className={ `ystdb-heading__container` }>
				{ 'top' === subTextPosition && (
					<>
						<SubTextContent />
						<SubTextDivider />
					</>
				) }
				<RichText.Content
					// @ts-ignore
					tagName={ tagName }
					className={ textClasses }
					style={ textStyles }
					value={ content || '' }
				/>
				{ 'bottom' === subTextPosition && (
					<>
						<SubTextDivider />
						<SubTextContent />
					</>
				) }
			</div>
		</div>
	);
}
