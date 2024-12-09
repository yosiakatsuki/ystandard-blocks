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
	getSubTextClasses, getSubTextStyles
} from '@aktk/blocks/block-library/heading/util';
import type { AttributeType } from '@aktk/blocks/block-library/heading/type';

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
		subText,
		subTextPosition,
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
		const subTextClasses = getSubTextClasses( attributes );
		const subTextStyles = getSubTextStyles( attributes );

		return (
			<div
				className={ subTextClasses }
				style={ subTextStyles }
				aria-hidden={ 'true' }
				data-text={ subText }
			/>
		);
	};

	return (
		<div { ...blockProps }>
			<div className={ `ystdb-heading__container` }>
				{ 'top' === subTextPosition && (
					<>
						<SubTextContent />
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
						<SubTextContent />
					</>
				) }
			</div>
		</div>
	);
}
