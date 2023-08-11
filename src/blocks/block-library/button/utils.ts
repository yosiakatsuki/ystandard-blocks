import classnames from 'classnames';
/**
 * Plugin dependencies.
 */
import type { InlineStyles } from '@aktk/blocks/components/inline-style-css/types';

/**
 * Block dependencies.
 */
import type { ButtonStyle } from './types';
import { isObject } from 'lodash';
import { parseResponsiveValues } from '@aktk/blocks/components/responsive-values/util';

export function getWrapClasses(classes: object) {
	return classnames('ystdb-custom-button', { ...classes });
}

export function getLinkClasses(classes: object) {
	return classnames('ystdb-custom-button__link', {
		...classes,
	});
}

export function parseInlineStyles(
	styles: ButtonStyle
): InlineStyles | undefined {
	let result = {};

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
