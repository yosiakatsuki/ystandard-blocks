import { getGapProperty } from '../gap';

describe( 'gap', () => {
	test( 'getGapProperty - all', () => {
		const gap = {
			top: '10px',
			right: '10px',
			bottom: '10px',
			left: '10px',
		};
		expect( getGapProperty( gap ) ).toEqual( { gap: '10px' } );
	} );
	test( 'getGapProperty - column - row', () => {
		const gap = {
			top: '20px',
			right: '10px',
			bottom: '20px',
			left: '10px',
		};
		expect( getGapProperty( gap ) ).toEqual( {
			'row-gap': '20px',
			'column-gap': '10px',
		} );
	} );
	test( 'getGapProperty - top - right', () => {
		const gap = {
			top: '10px',
			right: '20px',
			bottom: '30px',
			left: '40px',
		};
		expect( getGapProperty( gap ) ).toEqual( {
			'row-gap': '10px',
			'column-gap': '20px',
		} );
	} );
	test( 'getGapProperty - top - right - same', () => {
		const gap = {
			top: '10px',
			right: '10px',
			bottom: '30px',
			left: '40px',
		};
		expect( getGapProperty( gap ) ).toEqual( {
			gap: '10px',
		} );
	} );
	test( 'getGapProperty - undefined top', () => {
		const gap = {
			right: '10px',
			bottom: '30px',
			left: '40px',
		};
		expect( getGapProperty( gap ) ).toBeUndefined();
	} );
	test( 'getGapProperty - undefined right', () => {
		const gap = {
			top: '10px',
			bottom: '30px',
			left: '40px',
		};
		expect( getGapProperty( gap ) ).toBeUndefined();
	} );
	test( 'getGapProperty - undefined responsive', () => {
		const responsive = {
			desktop: {
				top: '10px',
				right: '10px',
				bottom: '10px',
				left: '10px',
			},
		};
		expect( getGapProperty( responsive?.tablet ) ).toBeUndefined();
	} );
} );
