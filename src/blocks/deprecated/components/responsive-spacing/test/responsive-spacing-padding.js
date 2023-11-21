// @ts-nocheck
import { getResponsivePaddingStyle } from '../util';

/**
 * test : padding style
 */
describe('getResponsivePaddingStyle', () => {
	test('getResponsivePaddingStyle only desktop', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			padding: '10px',
		});
	});
	test('getResponsivePaddingStyle responsive', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
			tablet: {
				top: '20px',
				right: '20px',
				bottom: '20px',
				left: '20px',
			},
			mobile: {
				top: '30px',
				right: '30px',
				bottom: '30px',
				left: '30px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-desktop': '10px',
			'--ystdb-padding-tablet': '20px',
			'--ystdb-padding-mobile': '30px',
		});
	});

	test('getResponsivePaddingStyle only mobile', () => {
		const attr = {
			mobile: {
				top: '30px',
				right: '30px',
				bottom: '30px',
				left: '30px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-mobile': '30px',
		});
	});

	test('getResponsivePaddingStyle vertical - horizon', () => {
		const attr = {
			desktop: {
				top: '30px',
				right: '10px',
				bottom: '30px',
				left: '10px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			padding: '30px 10px',
		});
	});
	test('getResponsivePaddingStyle top - right&left - bottom', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '20px',
				bottom: '30px',
				left: '20px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			padding: '10px 20px 30px',
		});
	});
	test('getResponsivePaddingStyle trbl', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '20px',
				bottom: '30px',
				left: '40px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			padding: '10px 20px 30px 40px',
		});
	});
	test('getResponsivePaddingStyle top - left', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: null,
				bottom: null,
				left: '40px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			paddingTop: '10px',
			paddingLeft: '40px',
		});
	});
	test('getResponsiveGapStyle responsive', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
			tablet: {
				top: '20px',
				right: '20px',
				bottom: '20px',
				left: '20px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-desktop': '10px',
			'--ystdb-padding-tablet': '20px',
		});
	});
	test('getResponsiveGapStyle responsive - tablet - tbrl', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
			tablet: {
				top: '110px',
				right: '120px',
				bottom: '130px',
				left: '140px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-desktop': '10px',
			'--ystdb-padding-tablet': '110px 120px 130px 140px',
		});
	});

	test('getResponsiveGapStyle responsive - tablet - top - right&left - bottom', () => {
		const attr = {
			tablet: {
				top: '110px',
				right: '120px',
				bottom: '130px',
				left: '120px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-tablet': '110px 120px 130px',
		});
	});
	test('getResponsiveGapStyle responsive - mobile - top - left', () => {
		const attr = {
			mobile: {
				top: '110px',
				right: null,
				bottom: null,
				left: '120px',
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-top-mobile': '110px',
			'--ystdb-padding-left-mobile': '120px',
		});
	});
	test('getResponsiveGapStyle responsive - mobile - right - bottom', () => {
		const attr = {
			mobile: {
				top: null,
				right: '110px',
				bottom: '120px',
				left: null,
			},
		};
		expect(getResponsivePaddingStyle(attr)).toEqual({
			'--ystdb-padding-right-mobile': '110px',
			'--ystdb-padding-bottom-mobile': '120px',
		});
	});
});
