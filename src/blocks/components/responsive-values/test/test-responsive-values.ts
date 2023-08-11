import { parseResponsiveValues } from '../util';

describe('parseResponsiveValues', () => {
	// @ts-ignore
	test('not object', () => {
		expect(parseResponsiveValues('10px')).toStrictEqual({
			desktop: '10px',
		});
		expect(parseResponsiveValues(111)).toStrictEqual({
			desktop: 111,
		});
		// @ts-expect-error
		expect(parseResponsiveValues(undefined)).toBeUndefined();
	});
	// @ts-expect-error
	test('object', () => {
		const actual = parseResponsiveValues({
			desktop: '10px',
		});
		expect(actual).toStrictEqual({
			desktop: '10px',
		});
		const actual2 = parseResponsiveValues({
			desktop: '10px',
			tablet: '11px',
			mobile: '12px',
		});
		expect(actual2).toStrictEqual({
			desktop: '10px',
			tablet: '11px',
			mobile: '12px',
		});
		const actual3 = parseResponsiveValues({
			tablet: '11px',
			mobile: '12px',
		});
		expect(actual3).toStrictEqual({
			tablet: '11px',
			mobile: '12px',
		});
	});
	// @ts-expect-error
	test('object', () => {
		const actual = parseResponsiveValues({
			width: '10px',
		});
		expect(actual).toStrictEqual({
			desktop: { width: '10px' },
		});
	});
});
