// @ts-nocheck

import { camelCase } from 'lodash';
import { isObject, parseObject } from '@aktk/helper/object';
import { isResponsive, parseResponsiveValues } from '@aktk/helper/responsive';
import { getGapProperty } from '@aktk/helper/gap';
import { getSpacingProps } from '@aktk/helper/spacing';

/**
 * @deprecated v3.12.0
 */
const getCustomProperty = (
	value,
	device,
	_isResponsive = true,
	suffix = ''
) => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${suffix}` : '';
	if (!isObject(value)) {
		return undefined;
	}
	let result = {};
	Object.keys(value).map((key) => {
		const propertyName = _isResponsive
			? `${prefix}-${key}${_suffix}-${device}`
			: camelCase(key);
		result = {
			...result,
			[propertyName]: value[key],
		};
		return true;
	});
	return result;
};

/**
 * @deprecated v3.12.0
 */
const getResponsiveSpacingCustomProperty = (value, suffix = '') => {
	if (!isObject(value)) {
		return undefined;
	}
	return {
		...getCustomProperty(
			value?.desktop,
			'desktop',
			isResponsive(value),
			suffix
		),
		...getCustomProperty(
			value?.tablet,
			'tablet',
			isResponsive(value),
			suffix
		),
		...getCustomProperty(
			value?.mobile,
			'mobile',
			isResponsive(value),
			suffix
		),
	};
};

/**
 * @deprecated v3.12.0
 */
const getResponsiveGapCustomProperty = (value, suffix = '') => {
	if (!isObject(value)) {
		return undefined;
	}
	return {
		...getCustomProperty(
			getGapProperty(value?.desktop),
			'desktop',
			isResponsive(value),
			suffix
		),
		...getCustomProperty(
			getGapProperty(value?.tablet),
			'tablet',
			isResponsive(value),
			suffix
		),
		...getCustomProperty(
			getGapProperty(value?.mobile),
			'mobile',
			isResponsive(value),
			suffix
		),
	};
};

/**
 * @deprecated v3.12.0
 */
export const getResponsiveSpacingStyle = (type, values, suffix = '') => {
	const parsedValue = parseResponsiveValues({
		desktop: getSpacingProps(type, values?.desktop),
		tablet: getSpacingProps(type, values?.tablet),
		mobile: getSpacingProps(type, values?.mobile),
	});

	return parseObject(getResponsiveSpacingCustomProperty(parsedValue, suffix));
};

/**
 * @deprecated v3.12.0
 */
export const getResponsiveGapStyle = (values, suffix = '') => {
	return parseObject(getResponsiveGapCustomProperty(values, suffix));
};

/**
 * @deprecated v3.12.0
 */
export const getResponsivePaddingStyle = (values, suffix = '') => {
	return getResponsiveSpacingStyle('padding', values, suffix);
};
/**
 * @deprecated
 */
export const getResponsiveMarginStyle = (values, suffix = '') => {
	return getResponsiveSpacingStyle('margin', values, suffix);
};
