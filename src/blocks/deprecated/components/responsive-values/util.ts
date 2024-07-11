// @ts-nocheck
import { camelCase } from 'lodash';
import { isObject, parseObject } from '@aktk/blocks/deprecated/utils/object';
import {
	isResponsive,
	parseResponsiveValues,
} from '@aktk/blocks/deprecated/utils/responsive';

/**
 * @param      propertyName
 * @param      values
 * @param      suffix
 * @deprecated 置き換え予定
 */
// @ts-ignore
const getCustomProperties = ( propertyName, values, suffix = '' ) => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${ suffix }` : '';
	if ( ! isObject( values ) ) {
		return undefined;
	}
	if ( ! isResponsive( values ) ) {
		return { [ camelCase( propertyName ) ]: values?.desktop };
	}
	let result = {};
	Object.keys( values ).map( ( key ) => {
		const _propertyName = `${ prefix }-${ propertyName }${ _suffix }-${ key }`;
		result = {
			...result,
			[ _propertyName ]: values[ key ],
		};
		return true;
	} );
	return result;
};
/**
 * @param      propertyName
 * @param      values
 * @param      suffix
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getResponsiveValueStyle = (
	propertyName,
	values,
	suffix = ''
) => {
	const parsedValue = parseResponsiveValues( {
		desktop: values?.desktop,
		tablet: values?.tablet,
		mobile: values?.mobile,
	} );
	return parseObject(
		getCustomProperties( propertyName, parsedValue, suffix )
	);
};

/**
 * @param      values
 * @param      suffix
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getResponsiveWidthStyle = ( values, suffix = '' ) => {
	return getResponsiveValueStyle( 'width', values, suffix );
};
/**
 * @param      values
 * @param      suffix
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getResponsiveHeightStyle = ( values, suffix = '' ) => {
	return getResponsiveValueStyle( 'height', values, suffix );
};
