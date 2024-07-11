import { toNumber } from '../index';

describe( 'toNumber', () => {
	// @ts-ignore
	test( 'toNumber', () => {
		expect( toNumber( '111' ) ).toBe( 111 );
		expect( toNumber( '111', { min: 120 } ) ).toBe( 120 );
		expect( toNumber( '111', { max: 50 } ) ).toBe( 50 );

		expect( toNumber( '111', { min: 120, max: 150 } ) ).toBe( 120 );
		expect( toNumber( '131', { min: 120, max: 150 } ) ).toBe( 131 );
		expect( toNumber( '170', { min: 120, max: 150 } ) ).toBe( 150 );

		expect( toNumber( 'aaa' ) ).toBe( undefined );
		expect( toNumber( 'aaa', { default: 123 } ) ).toBe( 123 );
	} );
} );
