import { getResponsiveGapStyle } from '../index';

/**
 * test : gap style
 */
describe( 'gap style', () => {
	test( 'getResponsiveGapStyle only desktop', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect( getResponsiveGapStyle( attr ) ).toEqual( { gap: '10px' } );
	} );
	test( 'getResponsiveGapStyle responsive', () => {
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
		expect( getResponsiveGapStyle( attr ) ).toEqual( {
			'--ystdb-gap-desktop': '10px',
			'--ystdb-gap-tablet': '20px',
			'--ystdb-gap-mobile': '30px',
		} );
	} );

	test( 'getResponsiveGapStyle only mobile', () => {
		const attr = {
			mobile: {
				top: '30px',
				right: '30px',
				bottom: '30px',
				left: '30px',
			},
		};
		expect( getResponsiveGapStyle( attr ) ).toEqual( {
			'--ystdb-gap-mobile': '30px',
		} );
	} );

	test( 'getResponsiveGapStyle row - column', () => {
		const attr = {
			desktop: {
				top: '30px',
				right: '10px',
				bottom: '30px',
				left: '10px',
			},
		};
		expect( getResponsiveGapStyle( attr ) ).toEqual( {
			rowGap: '30px',
			columnGap: '10px',
		} );
	} );
	test( 'getResponsiveGapStyle row - column responsive', () => {
		const attr = {
			desktop: {
				top: '30px',
				right: '10px',
				bottom: '30px',
				left: '10px',
			},
			tablet: {
				top: '20px',
				right: '15px',
				bottom: '30px',
				left: '10px',
			},
		};
		expect( getResponsiveGapStyle( attr ) ).toEqual( {
			'--ystdb-row-gap-desktop': '30px',
			'--ystdb-column-gap-desktop': '10px',
			'--ystdb-row-gap-tablet': '20px',
			'--ystdb-column-gap-tablet': '15px',
		} );
	} );
} );
