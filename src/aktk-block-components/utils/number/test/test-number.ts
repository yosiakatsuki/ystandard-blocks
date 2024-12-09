import { toNumber, parseFloatWithUnit } from '../index';

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

describe( 'parseFloatWithUnit', () => {
	// @ts-ignore
	test( 'parseFloatWithUnit', () => {
		expect( parseFloatWithUnit( '111' ) ).toBe( 111 );
		expect( parseFloatWithUnit( '111em' ) ).toBe( 111 );
		expect( parseFloatWithUnit( '111px' ) ).toBe( 111 );
		expect( parseFloatWithUnit( '111%' ) ).toBe( 111 );

		// 数字に変換できない文字
		expect( parseFloatWithUnit( 'aaa' ) ).toBe( undefined );
		expect( parseFloatWithUnit( 'aaa', 123 ) ).toBe( 123 );

		// undefined
		expect( parseFloatWithUnit( undefined ) ).toBe( undefined );
		expect( parseFloatWithUnit( undefined, 234 ) ).toBe( 234 );

		// null
		expect( parseFloatWithUnit( null ) ).toBe( undefined );
		expect( parseFloatWithUnit( null, 456 ) ).toBe( 456 );
	} );
} );
