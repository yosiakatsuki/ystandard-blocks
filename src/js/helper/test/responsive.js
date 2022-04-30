import { isResponsive } from '../responsive.js';

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
