import {
	toNumber,
	parseFloatWithUnit,
	isZeroValue,
	toCssZeroOrRaw,
} from '../index';

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

// isZeroValueのテスト

describe( 'isZeroValue', () => {
	it( '0系の値はtrue', () => {
		expect( isZeroValue( 0 ) ).toBe( true );
		expect( isZeroValue( '0' ) ).toBe( true );
		expect( isZeroValue( '0px' ) ).toBe( true );
		expect( isZeroValue( '0em' ) ).toBe( true );
		expect( isZeroValue( '0rem' ) ).toBe( true );
		expect( isZeroValue( '0%' ) ).toBe( true );
		expect( isZeroValue( '0vw' ) ).toBe( true );
		expect( isZeroValue( '0vh' ) ).toBe( true );
		expect( isZeroValue( '0pt' ) ).toBe( true );
		expect( isZeroValue( '0ex' ) ).toBe( true );
		expect( isZeroValue( '0ch' ) ).toBe( true );
		expect( isZeroValue( '0cm' ) ).toBe( true );
		expect( isZeroValue( '0mm' ) ).toBe( true );
		expect( isZeroValue( '0in' ) ).toBe( true );
		expect( isZeroValue( '0pc' ) ).toBe( true );
		expect( isZeroValue( '0q' ) ).toBe( true );
		expect( isZeroValue( '0fr' ) ).toBe( true );
		expect( isZeroValue( '0s' ) ).toBe( true );
		expect( isZeroValue( '0deg' ) ).toBe( true );
		expect( isZeroValue( '0rad' ) ).toBe( true );
		expect( isZeroValue( '0turn' ) ).toBe( true );
		expect( isZeroValue( '0grad' ) ).toBe( true );
		expect( isZeroValue( '0dpi' ) ).toBe( true );
		expect( isZeroValue( '0dppx' ) ).toBe( true );
		expect( isZeroValue( '0dpcm' ) ).toBe( true );
	} );

	it( '0以外はfalse', () => {
		expect( isZeroValue( 1 ) ).toBe( false );
		expect( isZeroValue( '1' ) ).toBe( false );
		expect( isZeroValue( '10px' ) ).toBe( false );
		expect( isZeroValue( '0.1em' ) ).toBe( false );
		expect( isZeroValue( 'auto' ) ).toBe( false );
		expect( isZeroValue( 'none' ) ).toBe( false );
		expect( isZeroValue( undefined ) ).toBe( false );
		expect( isZeroValue( null ) ).toBe( false );
		expect( isZeroValue( '' ) ).toBe( false );
	} );
} );

describe( 'toCssZeroOrRaw', () => {
	it( 'isZeroValueなら0を返す', () => {
		expect( toCssZeroOrRaw( 0 ) ).toBe( 0 );
		expect( toCssZeroOrRaw( '0' ) ).toBe( 0 );
		expect( toCssZeroOrRaw( '0px' ) ).toBe( 0 );
		expect( toCssZeroOrRaw( '0em' ) ).toBe( 0 );
		expect( toCssZeroOrRaw( '0%' ) ).toBe( 0 );
	} );

	it( 'isZeroValueでない値はそのまま返す', () => {
		expect( toCssZeroOrRaw( 1 ) ).toBe( 1 );
		expect( toCssZeroOrRaw( '10px' ) ).toBe( '10px' );
		expect( toCssZeroOrRaw( undefined ) ).toBeUndefined();
		expect( toCssZeroOrRaw( null ) ).toBeUndefined();
	} );
} );
