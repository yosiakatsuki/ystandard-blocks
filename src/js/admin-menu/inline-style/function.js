import { getProperty } from '@aktk/helper/object';

export const getStyle = (styles, name, defaultStyle = undefined) => {
	return getProperty(styles, name, defaultStyle);
};

export const getCurrentStyle = (option, name) => {
	const current = getProperty(option, name);
	return getProperty(current, 'style');
};

export const getCurrentTabletStyle = (option, name) => {
	const current = getProperty(option, name);
	return getProperty(current, 'tabletStyle');
};

export const getCurrentMobileStyle = (option, name) => {
	const current = getProperty(option, name);
	return getProperty(current, 'mobileStyle');
};

export const getStyleUpdateValue = (option, name, value, type = 'style') => {
	const current = getProperty(option, name);
	return {
		...option,
		...{
			[name]: {
				...current,
				...{
					...getProperty(current, type),
					[type]: value,
				},
			},
		},
	};
};

export const getTabletStyleUpdateValue = (option, name, value) => {
	return getStyleUpdateValue(option, name, value, 'tabletStyle');
};
export const getMobileStyleUpdateValue = (option, name, value) => {
	return getStyleUpdateValue(option, name, value, 'mobileStyle');
};
