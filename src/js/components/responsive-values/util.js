// @ts-nocheck
import { camelCase } from 'lodash';
import { isObject, parseObject } from '@aktk/helper/object';
import { isResponsive, parseResponsiveValues } from '@aktk/helper/responsive';

const getCustomProperties = (propertyName, values, suffix = '') => {
	const prefix = '--ystdb';
	const _suffix = suffix ? `-${suffix}` : '';
	if (!isObject(values)) {
		return undefined;
	}
	if (!isResponsive(values)) {
		return { [camelCase(propertyName)]: values?.desktop };
	}
	let result = {};
	Object.keys(values).map((key) => {
		const _propertyName = `${prefix}-${propertyName}${_suffix}-${key}`;
		result = {
			...result,
			[_propertyName]: values[key],
		};
		return true;
	});
	return result;
};

export const getResponsiveValueStyle = (propertyName, values, suffix = '') => {
	const parsedValue = parseResponsiveValues({
		desktop: values?.desktop,
		tablet: values?.tablet,
		mobile: values?.mobile,
	});
	return parseObject(getCustomProperties(propertyName, parsedValue, suffix));
};

export const getResponsiveWidthStyle = (values, suffix = '') => {
	return getResponsiveValueStyle('width', values, suffix);
};
export const getResponsiveHeightStyle = (values, suffix = '') => {
	return getResponsiveValueStyle('height', values, suffix);
};
