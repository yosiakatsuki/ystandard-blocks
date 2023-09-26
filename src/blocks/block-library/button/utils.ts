import classnames from 'classnames/dedupe';
import { isObject } from 'lodash';

/**
 * WordPress dependencies.
 */
import { getColorClassName } from '@wordpress/block-editor';

/**
 * Plugin dependencies.
 */
import {
	parseResponsiveValues,
	getResponsiveCustomPropName,
	ResponsiveValues,
} from '@aktk/blocks/components/responsive-values';
import { getBlockStyleClasses } from '@aktk/blocks/components/block-classes';
import { getBorderRadiusStyles } from '@aktk/blocks/components/border-radius-control';
import { getBorderStyles } from '@aktk/blocks/components/border-box-control';
import type { ResponsiveFontSize } from '@aktk/blocks/components/responsive-font-size';
import type { ResponsiveSpacing } from '@aktk/blocks/components/responsive-spacing/types';

/**
 * Block dependencies.
 */
import type { Attributes } from './types';

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
		border,
		responsiveFontSize,
	} = attributes;

	const borderRadiusStyles = getBorderRadiusStyles(borderRadius);

	const types = ['desktop', 'tablet', 'mobile'] as const;
	const responsiveStyles = types.reduce((acc, type) => {
		const fontSize = responsiveFontSize?.[type];
		if (fontSize) {
			acc[getResponsiveCustomPropName('button--font-size', type)] =
				fontSize;
		}
		return acc;
	}, {} as Record<string, string>);

	return {
		[`--ystdb-button-justify`]: iconPosition,
		[getResponsiveCustomPropName('button--font-size', 'desktop')]:
			responsiveFontSize?.desktop,
		color: customTextColor,
		fontSize,
		background: customGradient,
		backgroundColor: customBackgroundColor,
		...borderRadiusStyles,
		...getBorderStyles(border),
		...responsiveStyles,
	};
}

export type parseLinkInlineStylesTypes = {
	responsiveFontSize?: ResponsiveFontSize;
	responsiveWidth?: ResponsiveValues;
	responsivePadding?: ResponsiveSpacing;
};

export function parseLinkInlineStyles(
	styles: parseLinkInlineStylesTypes
): InlineStyles | undefined {
	let result = {};

	if (!isObject(styles)) {
		return undefined;
	}

	// width.
	if (styles?.responsiveWidth) {
		result = {
			...result,
			width: parseResponsiveValues(styles?.responsiveWidth),
		};
	}
	// font-size
	if (styles?.responsiveFontSize) {
		result = {
			...result,
			fontSize: parseResponsiveValues(styles?.responsiveFontSize),
		};
	}

	return result as unknown as InlineStyles;
}
