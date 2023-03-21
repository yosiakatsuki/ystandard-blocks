export const responsiveKeys = {
	desktop: 'desktop',
	tablet: 'tablet',
	mobile: 'mobile',
};

export const isResponsive = (values) => {
	if (!values || 'object' !== typeof values) {
		return false;
	}
	return values.hasOwnProperty('tablet') || values.hasOwnProperty('mobile');
};

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
