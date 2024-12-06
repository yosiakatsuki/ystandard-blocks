/**
 * External dependencies
 */
import clsx from 'clsx';

type BlockClassesProps = {
	className?: string;
	textColor?: string;
};

// @ts-ignore
export function getBlockClasses( attributes: BlockClassesProps ) {
	const { className, textColor } = attributes;
	return clsx( 'ystdb-heading', className, {
		[ `${ textColor }` ]: textColor,
	} );
}

type HeadingTextClassesProps = {
	clearStyle?: boolean;
	textColor?: string;
	hasTextColor?: boolean;
};

export function getHeadingTextClasses( attributes: HeadingTextClassesProps ) {
	const { textColor, hasTextColor = false, clearStyle = true } = attributes;
	return clsx( 'ystdb-heading__text', {
		[ `${ textColor }` ]: textColor,
		'has-text-color': hasTextColor,
		'is-clear-style': clearStyle,
	} );
}

type HeadingTextStylesProps = {
	textColor?: string;
};

export function getHeadingTextStyles( attributes: HeadingTextStylesProps ) {
	const { textColor } = attributes;
	return {
		color: textColor || undefined,
	};
}
