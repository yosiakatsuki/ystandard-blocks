import { getCSS } from '../util';

describe( 'inline style css', () => {
	// @ts-expect-error
	test( 'not object', () => {
		// @ts-expect-error
		expect( getCSS( '10px' ) ).toBe( '' );
		// @ts-expect-error
		expect( getCSS( 111 ) ).toBe( '' );
		// @ts-expect-error
		expect( getCSS( undefined ) ).toBe( '' );
	} );
	// @ts-expect-error
	test( 'object', () => {
		const actual = getCSS( {
			width: '10px',
			height: '11px',
			borderRadius: '12px',
		} );
		expect( actual ).toBe(
			'width: 10px; height: 11px; border-radius: 12px;'
		);
		const actual2 = getCSS( {} );
		expect( actual2 ).toBe( '' );
	} );
} );
