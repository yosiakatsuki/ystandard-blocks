import { isObject } from 'lodash';

/**
 * Aktk dependencies.
 */
import { stripUndefined } from '@aktk/block-components/utils/object';

import type { ResponsiveValues } from './types';

type ParseResponsiveValuesProps =
	| ResponsiveValues
	| string
	| number
	| boolean
	| object
	| undefined;

export function parseResponsiveValues( values: ParseResponsiveValuesProps ) {
	if ( undefined === values ) {
		return undefined;
	}
	if ( ! isObject( values ) ) {
		return { desktop: values };
	}
	const { desktop, tablet, mobile } = values as unknown as ResponsiveValues;
	let result;
	if ( desktop || tablet || mobile ) {
		result = {
			desktop,
			tablet,
			mobile,
		};
	} else {
		result = { desktop: values };
	}
	return stripUndefined( result );
}

export function getResponsiveCustomPropName(
	name: string,
	type: 'mobile' | 'tablet' | 'desktop'
) {
	return `--ystdb--${ type }--${ name }`;
}
