import { isEmptyArray } from '../array';

describe('isEmptyArray', () => {
	test('empty array', () => {
		expect(isEmptyArray([])).toBe(true);
	});
	test('not array 1', () => {
		expect(isEmptyArray('array')).toBe(false);
	});
	test('not array', () => {
		expect(isEmptyArray({ key: 'key1', value: 123 })).toBe(false);
	});
	test('has value', () => {
		expect(isEmptyArray([1, 2, 3])).toBe(false);
	});
});
