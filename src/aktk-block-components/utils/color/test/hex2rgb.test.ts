import { hex2rgb } from '../index';

describe( 'hex2rgb', () => {
	it( '#付きの6文字のHEX値を正しく変換する', () => {
		expect( hex2rgb( '#ff0000' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( '#00ff00' ) ).toEqual( [ 0, 255, 0 ] );
		expect( hex2rgb( '#0000ff' ) ).toEqual( [ 0, 0, 255 ] );
		expect( hex2rgb( '#ffffff' ) ).toEqual( [ 255, 255, 255 ] );
		expect( hex2rgb( '#000000' ) ).toEqual( [ 0, 0, 0 ] );
	} );

	it( '#なしの6文字のHEX値を正しく変換する', () => {
		expect( hex2rgb( 'ff0000' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( '00ff00' ) ).toEqual( [ 0, 255, 0 ] );
		expect( hex2rgb( '0000ff' ) ).toEqual( [ 0, 0, 255 ] );
		expect( hex2rgb( 'ffffff' ) ).toEqual( [ 255, 255, 255 ] );
		expect( hex2rgb( '000000' ) ).toEqual( [ 0, 0, 0 ] );
	} );

	it( '#付きの3文字のHEX値を正しく変換する', () => {
		expect( hex2rgb( '#f00' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( '#0f0' ) ).toEqual( [ 0, 255, 0 ] );
		expect( hex2rgb( '#00f' ) ).toEqual( [ 0, 0, 255 ] );
		expect( hex2rgb( '#fff' ) ).toEqual( [ 255, 255, 255 ] );
		expect( hex2rgb( '#000' ) ).toEqual( [ 0, 0, 0 ] );
	} );

	it( '#なしの3文字のHEX値を正しく変換する', () => {
		expect( hex2rgb( 'f00' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( '0f0' ) ).toEqual( [ 0, 255, 0 ] );
		expect( hex2rgb( '00f' ) ).toEqual( [ 0, 0, 255 ] );
		expect( hex2rgb( 'fff' ) ).toEqual( [ 255, 255, 255 ] );
		expect( hex2rgb( '000' ) ).toEqual( [ 0, 0, 0 ] );
	} );

	it( '大文字のHEX値も正しく変換する', () => {
		expect( hex2rgb( '#FF0000' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( 'FF0000' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( '#F00' ) ).toEqual( [ 255, 0, 0 ] );
		expect( hex2rgb( 'F00' ) ).toEqual( [ 255, 0, 0 ] );
	} );

	it( '混合文字のHEX値も正しく変換する', () => {
		expect( hex2rgb( '#bDc3C7' ) ).toEqual( [ 189, 195, 199 ] );
		expect( hex2rgb( 'bDc3C7' ) ).toEqual( [ 189, 195, 199 ] );
	} );

	it( 'よく使用される色を正しく変換する', () => {
		// 黒
		expect( hex2rgb( '#000000' ) ).toEqual( [ 0, 0, 0 ] );
		// 白
		expect( hex2rgb( '#ffffff' ) ).toEqual( [ 255, 255, 255 ] );
		// グレー（#bdc3c7 - box-shadow-controlで使用）
		expect( hex2rgb( '#bdc3c7' ) ).toEqual( [ 189, 195, 199 ] );
	} );
} );