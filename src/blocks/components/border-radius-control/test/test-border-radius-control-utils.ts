import { getBorderRadiusStyles } from '../utils';

describe( 'getBorderRadiusStyles', () => {
	// @ts-ignore
	test( 'single', () => {
		expect( getBorderRadiusStyles( '10px' ) ).toStrictEqual( {
			borderRadius: '10px',
		} );
		expect( getBorderRadiusStyles( '' ) ).toBeUndefined();
		expect( getBorderRadiusStyles( undefined ) ).toBeUndefined();
	} );
	// @ts-ignore
	test( 'borderRadius', () => {
		expect(
			getBorderRadiusStyles( {
				borderRadius: '100px',
			} )
		).toStrictEqual( {
			borderRadius: '100px',
		} );
		expect(
			getBorderRadiusStyles( {
				borderRadius: '100px',
				topLeft: '10px',
				topRight: '11px',
				bottomRight: '12px',
				bottomLeft: '13px',
			} )
		).toStrictEqual( {
			borderRadius: '100px',
		} );
	} );
	// @ts-ignore
	test( 'split', () => {
		expect(
			getBorderRadiusStyles( {
				topLeft: '10px',
				topRight: '11px',
				bottomRight: '12px',
				bottomLeft: '13px',
			} )
		).toStrictEqual( {
			borderTopLeftRadius: '10px',
			borderTopRightRadius: '11px',
			borderBottomRightRadius: '12px',
			borderBottomLeftRadius: '13px',
		} );
		expect(
			getBorderRadiusStyles( {
				topLeft: '10px',
				bottomRight: '12px',
			} )
		).toStrictEqual( {
			borderTopLeftRadius: '10px',
			borderBottomRightRadius: '12px',
		} );
		expect(
			getBorderRadiusStyles( {
				bottomLeft: '10px',
			} )
		).toStrictEqual( {
			borderBottomLeftRadius: '10px',
		} );
		expect(
			getBorderRadiusStyles( {
				topLeft: undefined,
				bottomLeft: '10px',
			} )
		).toStrictEqual( {
			borderBottomLeftRadius: '10px',
		} );
		expect(
			getBorderRadiusStyles( {
				topRight: undefined,
				bottomLeft: undefined,
			} )
		).toStrictEqual( {} );
	} );
} );
