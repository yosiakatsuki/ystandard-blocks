import { isObject } from 'lodash';

export const getDefaultAttributes = () => {
	if (
		!window.ystdtbBlockEditor ||
		'object' !== typeof window.ystdtbBlockEditor
	) {
		return {};
	}
	if (!window.ystdtbBlockEditor.hasOwnProperty('defaultAttributes')) {
		return {};
	}
	return window.ystdtbBlockEditor.defaultAttributes;
};

/**
 * PHPから拡張したデフォルト値をセットする.
 *
 * @param {string} name
 * @param {Object} attributes
 */
export const mergeDefaultAttributes = (name: string, attributes: object) => {
	const defaultAttributes = getDefaultAttributes();
	if (!defaultAttributes) {
		return attributes;
	}
	if (!defaultAttributes.hasOwnProperty(name)) {
		return attributes;
	}
	// @ts-ignore
	const blockDefaultAttr = defaultAttributes[name];
	Object.keys(blockDefaultAttr).map((key) => {
		if (attributes.hasOwnProperty(key)) {
			// @ts-ignore
			attributes[key].default = blockDefaultAttr[key];
		}
		return blockDefaultAttr;
	});
	return attributes;
};

export function parseObjectAttributes(value: object) {
	let result = {};
	// undefinedを削除する.
	try {
		result = JSON.parse(JSON.stringify(value));
	} catch (error) {
		result = {};
	}
	if (!isObject(result)) {
		return undefined;
	}
	console.log({ result });
	if (0 >= Object.keys(result).length) {
		return undefined;
	}
	return result;
}
