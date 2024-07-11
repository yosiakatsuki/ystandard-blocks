import { removeUndefined } from '../index';

describe( 'removeUndefined', () => {
	// @ts-ignore
	test( 'removeUndefined', () => {
		const actual = {
			a: 12,
			b: '13px',
			c: undefined,
		};
		expect( removeUndefined( actual ) ).toStrictEqual( {
			a: 12,
			b: '13px',
		} );
		const actual2 = {
			a: 12,
			b: {
				ba: 22,
				bb: undefined,
			},
			c: undefined,
		};
		expect( removeUndefined( actual2 ) ).toStrictEqual( {
			a: 12,
			b: { ba: 22 },
		} );
	} );
} );
