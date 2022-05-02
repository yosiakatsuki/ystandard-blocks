import { getSpacingProps } from '../spacing';

describe( 'getSpacingProps', () => {
	test( 'getSpacingProps all 10px', () => {
		const type = 'padding';
		const spacing = {
			top: '10px',
			right: '10px',
			bottom: '10px',
			left: '10px',
		};
		expect( getSpacingProps( type, spacing ) ).toEqual( {
			padding: '10px',
		} );
	} );
	test( 'getSpacingProps v 10px - h 20px', () => {
		const type = 'padding';
		const spacing = {
			top: '10px',
			right: '20px',
			bottom: '10px',
			left: '20px',
		};
		expect( getSpacingProps( type, spacing ) ).toEqual( {
			padding: '10px 20px',
		} );
	} );
	test( 'getSpacingProps -- t 10px - h 20px - b 30px', () => {
		const type = 'padding';
		const spacing = {
			top: '10px',
			right: '20px',
			bottom: '30px',
			left: '20px',
		};
		expect( getSpacingProps( type, spacing ) ).toEqual( {
			padding: '10px 20px 30px',
		} );
	} );
	test( 'getSpacingProps -- t 10px - b 30px', () => {
		const type = 'padding';
		const spacing = {
			top: '10px',
			right: null,
			bottom: '30px',
			left: null,
		};
		expect( getSpacingProps( type, spacing ) ).toEqual( {
			'padding-top': '10px',
			'padding-bottom': '30px',
		} );
	} );
	test( 'getSpacingProps -- r 10px - l 30px', () => {
		const type = 'padding';
		const spacing = {
			top: null,
			right: '10px',
			bottom: null,
			left: '30px',
		};
		expect( getSpacingProps( type, spacing ) ).toEqual( {
			'padding-right': '10px',
			'padding-left': '30px',
		} );
	} );
} );
