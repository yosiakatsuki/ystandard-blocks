import { responsiveKeys } from '@aktk/blocks-old/helper/responsive';

/**
 * @deprecated
 */
// @ts-ignore
export default function getDeprecatedDataProperty(props) {
	for (const key in props) {
		if (undefined === props[key] || null === props[key]) {
			delete props[key];
		}
	}

	return !Object.keys(props).length
		? undefined
		: { 'data-ys-responsive-property': `${JSON.stringify(props)}` };
}

/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const isResponsive = (values) => {
	if (!values || 'object' !== typeof values) {
		return false;
	}
	return values.hasOwnProperty('tablet') || values.hasOwnProperty('mobile');
};

/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const getResponsiveValue = (values, key) => {
	if (!values || 'object' !== typeof values) {
		return undefined;
	}
	let result = values.hasOwnProperty(key) ? values[key] : {};
	if ('object' === typeof result) {
		result = 0 < Object.keys(result).length ? result : undefined;
	}
	return result;
};

/**
 * @deprecated 旧関数
 */
// @ts-ignore
export const getResponsiveValues = (values) => {
	if (!values || 'object' !== typeof values) {
		return undefined;
	}
	let result = {};
	if (values?.desktop) {
		result = {
			...result,
			desktop: values.desktop,
		};
	}
	if (values?.tablet) {
		result = {
			...result,
			tablet: values.tablet,
		};
	}
	if (values?.mobile) {
		result = {
			...result,
			mobile: values.mobile,
		};
	}
	return 0 < Object.keys(result).length ? result : undefined;
};



/**
 * @deprecated 置き換え予定
 */
// @ts-ignore
export const parseResponsiveValues = (values, arrowFalsy = false) => {
	if (!values || 'object' !== typeof values) {
		return undefined;
	}
	let result = {};
	Object.keys(responsiveKeys).map((key) => {
		if (values.hasOwnProperty(key)) {
			if (arrowFalsy) {
				result = {
					...result,
					[key]: values[key],
				};
			} else if (!!values[key]) {
				result = {
					...result,
					[key]: values[key],
				};
			}
		}
		return true;
	});
	return 0 < Object.keys(result).length ? result : undefined;
};
