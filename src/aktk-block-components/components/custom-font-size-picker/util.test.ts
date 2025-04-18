// @ts-nocheck
import { sanitizeFontSize } from './util';

// sanitizeFontSize のテスト
describe( 'sanitizeFontSize', () => {
	it( 'fontSize が存在しない場合、undefined を返す', () => {
		expect( sanitizeFontSize( {} ) ).toBeUndefined();
	} );

	it( 'fontSize.fontSize が存在しない場合、fontSize を削除', () => {
		expect( sanitizeFontSize( { fontSize: {} } ) ).toBeUndefined();
	} );

	it( 'fontSize.fontSize が存在し、size が存在しない場合、fontSize.fontSize を削除', () => {
		expect(
			sanitizeFontSize( {
				fontSize: { fontSize: { slug: 'hoge', className: 'hoge' } },
			} )
		).toBeUndefined();
	} );

	it( 'fontSize.fontSize が存在し、slug が存在しない場合、fontSize.fontSize を削除', () => {
		expect(
			sanitizeFontSize( {
				fontSize: { fontSize: { size: 20, className: 'hoge' } },
			} )
		).toBeUndefined();
	} );

	it( 'fontSize.fontSize が存在し、className が存在しない場合、fontSize.fontSize を削除', () => {
		expect(
			sanitizeFontSize( {
				fontSize: { fontSize: { size: 20, slug: 'hoge' } },
			} )
		).toBeUndefined();
	} );

	it( 'desktop が存在しない場合、desktop を削除', () => {
		expect(
			sanitizeFontSize( {
				desktop: {
					fontSize: {
						size: 20,
						slug: 'hoge',
						className: 'hoge',
					},
				},
			} )
		).toEqual( {
			desktop: {
				fontSize: { size: 20, slug: 'hoge', className: 'hoge' },
			},
		} );
	} );

	it( 'tablet が存在しない場合、tablet を削除', () => {
		expect(
			sanitizeFontSize( {
				tablet: {
					fontSize: {
						size: 20,
						slug: 'hoge',
						className: 'hoge',
					},
				},
			} )
		).toEqual( {
			tablet: { fontSize: { size: 20, slug: 'hoge', className: 'hoge' } },
		} );
	} );

	it( 'mobile が存在しない場合、mobile を削除', () => {
		expect(
			sanitizeFontSize( {
				mobile: {
					fontSize: {
						size: 20,
						slug: 'hoge',
						className: 'hoge',
					},
				},
			} )
		).toEqual( {
			mobile: { fontSize: { size: 20, slug: 'hoge', className: 'hoge' } },
		} );
	} );

	it( '全ての値が存在する場合、そのまま返す', () => {
		expect(
			sanitizeFontSize( {
				fontSize: { size: 20, slug: 'hoge', className: 'hoge' },
				desktop: '20px',
				tablet: '20px',
				mobile: '20px',
			} )
		).toEqual( {
			fontSize: { size: 20, slug: 'hoge', className: 'hoge' },
			desktop: '20px',
			tablet: '20px',
			mobile: '20px',
		} );
	} );
} );
