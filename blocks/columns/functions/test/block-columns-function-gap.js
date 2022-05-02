import { getColumnGapCustomProperty } from '../gap';

describe( 'getColumnGapCustomProperty', () => {
	test( 'getColumnGapCustomProperty only desktop', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect( getColumnGapCustomProperty( attr ) ).toEqual( {
			'--ystdb-column-row-gap': '10px',
			'--ystdb-column-column-gap': '10px',
		} );
	} );
	test( 'getColumnGapCustomProperty only tablet', () => {
		const attr = {
			tablet: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect( getColumnGapCustomProperty( attr ) ).toBeUndefined();
	} );
	test( 'getColumnGapCustomProperty row - col', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '20px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect( getColumnGapCustomProperty( attr ) ).toEqual( {
			'--ystdb-column-row-gap': '10px',
			'--ystdb-column-column-gap': '20px',
		} );
	} );
	test( 'getColumnGapCustomProperty desktop, tablet', () => {
		const attr = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
			tablet: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect( getColumnGapCustomProperty( attr ) ).toBeUndefined();
	} );
} );
