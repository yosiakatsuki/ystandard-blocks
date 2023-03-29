// @ts-nocheck
import { getResponsiveWidthStyle, getResponsiveHeightStyle } from '../util';

/**
 * Width
 */
describe('Width style', () => {
	test('getResponsiveWidthStyle only desktop', () => {
		const attr = {
			desktop: '100px',
		};
		expect(getResponsiveWidthStyle(attr)).toEqual({ width: '100px' });
	});
	test('getResponsiveWidthStyle responsive', () => {
		const attr = {
			desktop: '100px',
			tablet: '50px',
			mobile: '30px',
		};
		expect(getResponsiveWidthStyle(attr)).toEqual({
			'--ystdb-width-desktop': '100px',
			'--ystdb-width-tablet': '50px',
			'--ystdb-width-mobile': '30px',
		});
	});
	test('getResponsiveWidthStyle only mobile', () => {
		const attr = {
			mobile: '30px',
		};
		expect(getResponsiveWidthStyle(attr)).toEqual({
			'--ystdb-width-mobile': '30px',
		});
	});
});

describe('Height style', () => {
	test('getResponsiveHeightStyle only desktop', () => {
		const attr = {
			desktop: '100px',
		};
		expect(getResponsiveHeightStyle(attr)).toEqual({
			height: '100px',
		});
	});
	test('getResponsiveHeightStyle responsive', () => {
		const attr = {
			desktop: '100px',
			tablet: '50px',
			mobile: '30px',
		};
		expect(getResponsiveHeightStyle(attr)).toEqual({
			'--ystdb-height-desktop': '100px',
			'--ystdb-height-tablet': '50px',
			'--ystdb-height-mobile': '30px',
		});
	});
	test('getResponsiveHeightStyle only mobile', () => {
		const attr = {
			mobile: '30px',
		};
		expect(getResponsiveHeightStyle(attr)).toEqual({
			'--ystdb-height-mobile': '30px',
		});
	});
});
