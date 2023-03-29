import { migratePadding } from '../util';

describe('migratePadding', () => {
	test('migratePadding is-small', () => {
		const attributes = {
			paddingType: 'is-padding-small',
			className: 'is-padding-small test-class',
		};
		expect(migratePadding(attributes)).toEqual({
			padding: {
				desktop: {
					top: '1rem',
					right: '1rem',
					bottom: '1rem',
					left: '1rem',
				},
			},
			className: 'test-class',
		});
	});
	test('migratePadding is-large', () => {
		const attributes = {
			paddingType: 'is-padding-large',
			className: 'is-padding-large test-class',
		};
		expect(migratePadding(attributes)).toEqual({
			padding: {
				desktop: {
					top: '1.5rem',
					right: '1.5rem',
					bottom: '1.5rem',
					left: '1.5rem',
				},
			},
			className: 'test-class',
		});
	});
	test('migratePadding no padding', () => {
		const attributes = {
			className: 'test-class',
		};
		expect(migratePadding(attributes)).toEqual({
			className: 'test-class',
		});
	});
});
