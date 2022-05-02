import { isResponsive, parseResponsiveValues } from '../responsive.js';

/**
 * test : isResponsive
 */
describe( 'isResponsive', () => {
	test( 'isResponsive - only desktop', () => {
		const value = {
			desktop: '10px',
		};
		expect( isResponsive( value ) ).toBe( false );
	} );
	test( 'isResponsive - desktop,tablet', () => {
		const value = {
			desktop: '10px',
			tablet: '10px',
		};
		expect( isResponsive( value ) ).toBe( true );
	} );
	test( 'isResponsive - desktop,tablet,mobile', () => {
		const value = {
			desktop: '10px',
			tablet: '10px',
			mobile: '10px',
		};
		expect( isResponsive( value ) ).toBe( true );
	} );
	test( 'isResponsive - tablet,mobile', () => {
		const value = {
			tablet: '10px',
			mobile: '10px',
		};
		expect( isResponsive( value ) ).toBe( true );
	} );
} );

/**
 * test : parseResponsiveValues
 */
describe( 'parseResponsiveValues', () => {
	test( 'parseResponsiveValues - only desktop', () => {
		const value = {
			desktop: '10px',
		};
		expect( parseResponsiveValues( value ) ).toEqual( {
			desktop: '10px',
		} );
	} );
	test( 'isResponsive - delete false', () => {
		const value = {
			desktop: '10px',
			tablet: false,
		};
		expect( parseResponsiveValues( value ) ).toEqual( {
			desktop: '10px',
		} );
	} );
	test( 'isResponsive - keep false', () => {
		const value = {
			desktop: '10px',
			tablet: false,
		};
		expect( parseResponsiveValues( value, true ) ).toEqual( {
			desktop: '10px',
			tablet: false,
		} );
	} );
	test( 'isResponsive - desktop,tablet,mobile', () => {
		const value = {
			desktop: '10px',
			tablet: '20px',
			mobile: '30px',
		};
		expect( parseResponsiveValues( value ) ).toEqual( {
			desktop: '10px',
			tablet: '20px',
			mobile: '30px',
		} );
	} );
} );
