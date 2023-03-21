export function getConfig(name, defaultValue = undefined) {
	if (!window.ystdbAdminMenuConfig) {
		return defaultValue;
	}
	if (!window.ystdbAdminMenuConfig.hasOwnProperty('config')) {
		return defaultValue;
	}
	const config = window.ystdbAdminMenuConfig.config;
	if (!config.hasOwnProperty(name)) {
		return defaultValue;
	}
	return config[name];
}

export function getOption(section, name, defaultValue = undefined) {
	if (!window.ystdbAdminMenuOptions) {
		return defaultValue;
	}
	if (!window.ystdbAdminMenuOptions.hasOwnProperty('options')) {
		return defaultValue;
	}
	const options = window.ystdbAdminMenuOptions.options;
	if (!options.hasOwnProperty(section)) {
		return defaultValue;
	}
	// 設定名指定あり・なし.
	if (name) {
		if (!options[section].hasOwnProperty(name)) {
			return defaultValue;
		}
	} else {
		// 設定名の指定がなければセクションまとめて.
		return options[section];
	}

	return options[section][name];
}

export const SUCCESS = 'success';
export const ERROR = 'error';

export function isApiSuccess(status) {
	return SUCCESS === status;
}

export function isApiError(status) {
	return ERROR === status;
}

export function getApiRoute(name) {
	const route = getConfig('route');
	if (!route.hasOwnProperty(name)) {
		return undefined;
	}
	return route[name];
}

export function getEndpoint(name) {
	const namespace = getConfig('endpointNamespace');
	if (!namespace) {
		/* eslint-disable no-console */
		console.error('Namespaceが見つかりません');
		/* eslint-enable */
		return undefined;
	}
	const route = getApiRoute(name);
	return namespace + '/' + route;
}
