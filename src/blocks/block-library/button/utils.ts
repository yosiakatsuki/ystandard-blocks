import classnames from 'classnames/dedupe';
/**
 * Plugin dependencies.
 */
import type { InlineStyles } from '@aktk/blocks/components/inline-style-css/types';

/**
 * Block dependencies.
 */
import type { Attributes, ButtonStyle } from './types';
import { isObject } from 'lodash';
import { parseResponsiveValues } from '@aktk/blocks/components/responsive-values';
import { getBlockStyleClasses } from '@aktk/blocks/components/block-classes';
import { getColorClassName } from '@wordpress/block-editor';

export function getWrapClasses(attributes: Attributes) {
	const className = attributes?.className || '';
	return classnames('ystdb-custom-button', {
		[`ystdb-block-${attributes?.clientId}`]: attributes?.clientId,
		[className]: attributes?.className,
		[`is-type--${attributes?.buttonType}`]: attributes?.buttonType,
	});
}

type LinkClasses = Attributes & {
	gradientClass?: string;
};

export function getLinkClasses(attributes: LinkClasses) {
	const {
		className = '',
		textColor = '',
		fontSize = '',
		backgroundColor = '',
		gradientClass = '',
	} = attributes;

	const textColorClass = getColorClassName('color', textColor);
	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	return classnames('ystdb-custom-button__link', {
		[className]: !!className,
		[textColorClass]: !!textColor,
		[`${fontSize}`]: !!fontSize,
		[backgroundColorClass]: !!backgroundColor,
		[`${gradientClass}`]: !!gradientClass,
		...getBlockStyleClasses({
			textColor: textColor || attributes?.customTextColor,
			backgroundColor:
				backgroundColor || attributes?.customBackgroundColor,
			gradients: gradientClass || attributes?.customGradient,
		}),
	});
}

export function getLinkStyles(attributes: Attributes) {
	const {
		iconPosition,
		customTextColor,
		fontSize,
		customBackgroundColor,
		customGradient,
		borderRadius,
	} = attributes;
	return {
		[`--ystdb-button-justify`]: iconPosition,
		color: customTextColor,
		fontSize: fontSize,
		background: customGradient,
		backgroundColor: customBackgroundColor,
		borderRadius: borderRadius,
	};
}

export function parseInlineStyles(
	styles: ButtonStyle
): InlineStyles | undefined {
	const result = {};

	if (!isObject(styles)) {
		return undefined;
	}

	return result as unknown as InlineStyles;
}

export function parseLinkInlineStyles(
	styles: ButtonStyle
): InlineStyles | undefined {
	let result = {};

	if (!isObject(styles)) {
		return undefined;
	}

	// width.
	if (styles?.width) {
		result = {
			...result,
			width: parseResponsiveValues(styles?.width),
		};
	}
	// font-size
	if (styles?.fontSize) {
		result = {
			...result,
			fontSize: parseResponsiveValues(styles?.fontSize),
		};
	}

	return result as unknown as InlineStyles;
}
