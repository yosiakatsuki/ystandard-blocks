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
import { parseResponsiveValues } from '@aktk/blocks/components/responsive-values/util';

export function getWrapClasses(attributes: Attributes) {
	const className = attributes?.className || '';
	return classnames('ystdb-custom-button', {
		[`ystdb-block-${attributes?.clientId}`]: attributes?.clientId,
		[className]: attributes?.className,
		[`is-type--${attributes?.buttonType}`]: attributes?.buttonType,
	});
}

export function getLinkClasses(attributes: Attributes) {
	const { className = '', textColor = '' } = attributes;

	return classnames('ystdb-custom-button__link', {
		[className]: !!className,
		[textColor]: !!textColor,
	});
}

export function getLinkStyles(attributes: Attributes) {
	return {
		[`--ystdb-button-justify`]: attributes?.iconPosition,
		color: attributes?.textColor,
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
			...parseResponsiveValues({ desktop: { width: styles?.width } }),
		};
	}

	return result as unknown as InlineStyles;
}
