import { hex2rgb } from '../color';

describe('color', () => {
	test('hex2rgb - #000000', () => {
		expect(hex2rgb('#000000')).toEqual([0, 0, 0]);
	});
	test('hex2rgb - #ffffff', () => {
		expect(hex2rgb('#ffffff')).toEqual([255, 255, 255]);
	});
	test('hex2rgb - #000', () => {
		expect(hex2rgb('#000')).toEqual([0, 0, 0]);
	});
	test('hex2rgb - #fff', () => {
		expect(hex2rgb('#fff')).toEqual([255, 255, 255]);
	});
});
