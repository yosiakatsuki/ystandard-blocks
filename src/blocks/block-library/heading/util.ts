/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * Plugin dependencies.
 */
import {
	getDeprecatedFontResponsiveStyle,
	getDeprecatedFontResponsiveClass,
} from '@aktk/blocks/deprecated/components/responsive-font-size';

type BlockClassesProps = {
	align: string;
	subTextBorderHeight: number;
	subTextBorderWidth: number;
	subTextPosition: string;
	subText: string;
	useFontSizeResponsive: boolean;
	fontSizeDesktop: number;
	fontSizeTablet: number;
	fontSizeMobile: number;
};

export function getBlockClasses( attributes: BlockClassesProps ) {
	const {
		align,
		subTextBorderHeight,
		subTextBorderWidth,
		subText,
		subTextPosition,
		useFontSizeResponsive,
		fontSizeDesktop,
		fontSizeTablet,
		fontSizeMobile,
	} = attributes;

	return clsx( 'ystdb-heading', {
		[ `has-text-align-${ align }` ]: align,
		'has-divider': subTextBorderHeight && subTextBorderWidth,
		'has-sub-text': subText,
		[ `has-subtext--${ subTextPosition }` ]:
			subText || ( subTextBorderHeight && subTextBorderWidth ),
		...getDeprecatedFontResponsiveClass(
			useFontSizeResponsive,
			fontSizeDesktop,
			fontSizeTablet,
			fontSizeMobile
		),
	} );
}

type BlockStylesProps = {
	useFontSizeResponsive: boolean;
	fontSizeMobile?: number;
	fontSizeTablet?: number;
	fontSizeDesktop?: number;
	marginTop?: string;
	marginTopUnit?: string;
	marginRight?: string;
	marginRightUnit?: string;
	marginBottom?: string;
	marginBottomUnit?: string;
	marginLeft?: string;
	marginLeftUnit?: string;
};

export function getBlockStyles( attributes: BlockStylesProps ) {
	const {
		useFontSizeResponsive,
		fontSizeMobile,
		fontSizeTablet,
		fontSizeDesktop,
		marginTop,
		marginTopUnit,
		marginRight,
		marginRightUnit,
		marginBottom,
		marginBottomUnit,
		marginLeft,
		marginLeftUnit,
	} = attributes;

	// 余白の作成.
	const getSpacingValue = (
		spacing: number | string | undefined,
		unit: string | undefined
	) => {
		if ( undefined === spacing || '' === spacing ) {
			return undefined;
		}
		return `${ spacing }${ unit }`;
	};

	return {
		...getDeprecatedFontResponsiveStyle( {
			isResponsive: useFontSizeResponsive,
			desktop: fontSizeDesktop,
			tablet: fontSizeTablet,
			mobile: fontSizeMobile,
		} ),
		marginTop: getSpacingValue( marginTop, marginTopUnit ),
		marginRight: getSpacingValue( marginRight, marginRightUnit ),
		marginBottom: getSpacingValue( marginBottom, marginBottomUnit ),
		marginLeft: getSpacingValue( marginLeft, marginLeftUnit ),
	};
}

type HeadingTextClassesProps = {
	textColor: string;
	hasTextColor: boolean;
	fontSize: string;
	useFontSizeResponsive: boolean;
	clearStyle: boolean;
};

export function getHeadingTextClasses( attributes: HeadingTextClassesProps ) {
	const {
		textColor,
		hasTextColor = false,
		fontSize,
		useFontSizeResponsive = false,
		clearStyle = true,
	} = attributes;
	return clsx( 'ystdb-heading__text', {
		[ `${ textColor }` ]: textColor,
		'has-text-color': hasTextColor,
		'is-clear-style': clearStyle,
		[ `${ fontSize }` ]: fontSize && ! useFontSizeResponsive,
	} );
}

type HeadingTextStylesProps = {
	textColor: string;
	fontSize: string;
	useFontSizeResponsive: boolean;
	fontWeight: string;
	letterSpacing: number;
};

export function getHeadingTextStyles( attributes: HeadingTextStylesProps ) {
	const {
		textColor,
		fontSize,
		useFontSizeResponsive,
		fontWeight,
		letterSpacing,
	} = attributes;
	return {
		color: textColor || undefined,
		fontSize: fontSize && ! useFontSizeResponsive ? fontSize : undefined,
		fontWeight: fontWeight || undefined,
		letterSpacing: !! letterSpacing ? `${ letterSpacing }em` : undefined,
	};
}

type SubTextClassesProps = {
	subTextColor: string;
	subTextSize: string;
	hasSubTextSize: boolean;
	useSubTextSizeResponsive: boolean;
	subTextSizeDesktop: number;
	subTextSizeTablet: number;
	subTextSizeMobile: number;
	hasSubTextColor: boolean;
};

export function getSubTextClasses( props: SubTextClassesProps ) {
	const {
		subTextSize,
		hasSubTextSize,
		useSubTextSizeResponsive,
		subTextSizeDesktop,
		subTextSizeTablet,
		subTextSizeMobile,
		subTextColor,
		hasSubTextColor,
	} = props;
	return clsx( 'ystdb-heading__subtext', {
		[ `${ subTextSize }` ]: subTextSize && ! useSubTextSizeResponsive,
		'has-font-size': hasSubTextSize,
		...getDeprecatedFontResponsiveClass(
			useSubTextSizeResponsive,
			subTextSizeDesktop,
			subTextSizeTablet,
			subTextSizeMobile
		),
		[ `${ subTextColor }` ]: subTextColor,
		'has-color': hasSubTextColor,
	} );
}

type SubTextStylesProps = {
	subTextSize: string;
	useSubTextSizeResponsive: boolean;
	subTextSizeDesktop: number;
	subTextSizeTablet: number;
	subTextSizeMobile: number;
	subTextColor: string;
	subTextFontWeight: string;
	subTextLetterSpacing: number;
};

export function getSubTextStyles( props: SubTextStylesProps ) {
	const {
		subTextSize,
		useSubTextSizeResponsive,
		subTextSizeDesktop,
		subTextSizeTablet,
		subTextSizeMobile,
		subTextColor,
		subTextFontWeight,
		subTextLetterSpacing,
	} = props;
	return {
		fontSize:
			subTextSize && ! useSubTextSizeResponsive ? subTextSize : undefined,
		color: subTextColor || undefined,
		fontWeight: subTextFontWeight || undefined,
		letterSpacing: !! subTextLetterSpacing
			? `${ subTextLetterSpacing }em`
			: undefined,
		...getDeprecatedFontResponsiveStyle( {
			isResponsive: useSubTextSizeResponsive,
			desktop: subTextSizeDesktop,
			tablet: subTextSizeTablet,
			mobile: subTextSizeMobile,
		} ),
	};
}
