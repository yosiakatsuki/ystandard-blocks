export const isObject = (value) => {
	return 'object' === typeof value;
};
export const parseObject = (value) => {
	if (!value || !isObject(value)) {
		return undefined;
	}
	return 0 < Object.keys(value).length ? { ...value } : undefined;
};
export const hasObjectKey = (value, key) => {
	if (!isObject(value)) {
		return false;
	}
	return value.hasOwnProperty(key);
};

export const object2Array = (obj) => {
	let result = { ...obj };
	if (isObject(result)) {
		result = Object.entries(result).map((value) => {
			return value[1];
		});
	}
	return result;
};

// --- 移植前 ---.
export const hasKey = (obj, key) => {
	if (!obj || 'object' !== typeof obj) {
		return false;
	}

	return obj.hasOwnProperty(key);
};

export const getProperty = (obj, key, defaultValue = undefined) => {
	if (!hasKey(obj, key)) {
		return defaultValue;
	}

	return obj[key];
};

export const objectCopy = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};
