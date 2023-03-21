import { migrateRemoveMargin } from '../index';

describe('migrateRemoveMargin', () => {
	test('migrateRemoveMargin has no margin', () => {
		const attributes = {
			removeMargin: true,
		};
		expect(migrateRemoveMargin(attributes)).toEqual({
			gap: {
				desktop: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px',
				},
			},
		});
	});
	test('migrateRemoveMargin no removeMargin', () => {
		const attributes = {
			colPc: 3,
			colTablet: 3,
			colMobile: 1,
		};
		expect(migrateRemoveMargin(attributes)).toEqual({
			colPc: 3,
			colTablet: 3,
			colMobile: 1,
		});
	});
});
