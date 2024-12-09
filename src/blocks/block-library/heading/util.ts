/**
 * External dependencies
 */
import clsx from 'clsx';

type BlockClassesProps = {
	className: string;
};

// @ts-ignore
export function getBlockClasses( attributes: BlockClassesProps ) {
	const { className } = attributes;
	return clsx( 'ystdb-heading', className, {} );
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
