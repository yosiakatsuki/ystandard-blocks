import { isEmptyArray } from '../index';

describe('isEmptyArray', () => {
	// @ts-ignore
	test('isEmptyArray', () => {
		expect(isEmptyArray([])).toBe(true);
		expect(isEmptyArray('array')).toBe(false);
		expect(isEmptyArray({ key: 'key1', value: 123 })).toBe(false);
		expect(isEmptyArray(123)).toBe(false);
		expect(isEmptyArray(null)).toBe(false);
		expect(isEmptyArray(undefined)).toBe(false);
		expect(isEmptyArray(true)).toBe(false);
		expect(isEmptyArray(false)).toBe(false);
		expect(isEmptyArray([1, 2, 3])).toBe(false);
	});
});
