import { isObject, kebabCase } from 'lodash';
import { getBlockEditorConfig, removeUndefined } from '@aktk/blocks/utils';
import type { InlineStyles } from '@aktk/blocks/components/inline-style-css/types';

export function parseInlineStyleProps(styles: object): InlineStyles {
	let result = {};

	if (!isObject(styles)) {
		return result as InlineStyles;
	}

	let desktop = {};
	let tablet = {};
	let mobile = {};

	for (const [key, value] of Object.entries(styles)) {
		if (!isObject(value)) {
			desktop = {
				...desktop,
				[key]: value,
			};
		} else {
			const _value = value as InlineStyles;
			if (_value?.desktop) {
				desktop = {
					...desktop,
					[key]: _value.desktop,
				};
			}
			if (_value?.tablet) {
				tablet = {
					...tablet,
					[key]: _value.tablet,
				};
			}
			if (_value?.mobile) {
				mobile = {
					...mobile,
					[key]: _value.mobile,
				};
			}
		}
	}

	result = removeUndefined({ desktop, tablet, mobile });

	return result as InlineStyles;
}

export function getCSS(
	styles: object,
	clientId: string,
	selector: string = ''
) {
	if (!isObject(styles)) {
		return '';
	}
	let css = Object.entries(styles)
		.map(([key, value]) => `${kebabCase(key)}: ${value};`)
		.join(' ');

	if (!css) {
		return '';
	}
	if (clientId) {
		css = `.ystdb-block-${clientId}.ystdb-block-${clientId} ${selector} { ${css} }`;
	}
	return css;
}

export function getBreakpoint(type: string): string {
	const breakpoint = getBlockEditorConfig('breakpoint', {
		mobile: '37.5em',
		tablet: '48em',
		desktop: '64em',
	});

	if (!isObject(breakpoint)) {
		return '';
	}
	if (breakpoint.hasOwnProperty(type)) {
		// @ts-expect-error
		return breakpoint[type];
	}

	return '';
}

export function addMediaQueryMobile(css: string) {
	if (!css) {
		return '';
	}
	const breakpoint = getBreakpoint('mobile');

	return `@media (max-width:${breakpoint}) { ${css} }`;
}

export function addMediaQueryTablet(css: string) {
	if (!css) {
		return '';
	}
	let mobile = getBreakpoint('mobile');
	const desktop = getBreakpoint('desktop');
	const breakpointBase = getBlockEditorConfig('breakpointBase', 16);

	const unit = mobile.replace(parseFloat(mobile).toString(), '');
	// 単位がem or remの場合.
	if ('em' === unit || 'rem' === unit) {
		const _mobile = parseFloat(mobile) + 1 / breakpointBase;
		mobile = `${_mobile}${unit}`;
	}

	return `@media (min-width;${mobile}) AND (max-width:${desktop}) { ${css} }`;
}
