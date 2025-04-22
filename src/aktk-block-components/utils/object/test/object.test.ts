import { deleteUndefined, isObject, isEmpty } from '../index';

describe( 'deleteUndefined', () => {
	test( '空のプロパティを削除する', () => {
		const input = { a: 1, b: undefined, c: null, d: '', e: 0 };
		const expectedOutput = { a: 1, c: null, d: '', e: 0 };
		expect( deleteUndefined( input ) ).toEqual( expectedOutput );
	} );

	test( 'オブジェクトがそのまま返る（例外発生時）', () => {
		const circularObj = {};
		// @ts-ignore
		circularObj.circularRef = circularObj;
		expect( deleteUndefined( circularObj ) ).toBe( circularObj );
	} );
} );

describe( 'isObject', () => {
	test( 'オブジェクトである場合 true を返す', () => {
		expect( isObject( {} ) ).toBe( true );
		expect( isObject( [] ) ).toBe( true );
		expect( isObject( new Date() ) ).toBe( true );
	} );

	test( 'オブジェクトでない場合 false を返す', () => {
		expect( isObject( null ) ).toBe( false );
		expect( isObject( undefined ) ).toBe( false );
		expect( isObject( 123 ) ).toBe( false );
		expect( isObject( 'string' ) ).toBe( false );
	} );
} );

describe( 'isEmpty', () => {
	test( 'オブジェクトが空の場合 true を返す', () => {
		expect( isEmpty( {} ) ).toBe( true );
	} );

	test( 'オブジェクトが空でない場合 false を返す', () => {
		expect( isEmpty( { a: 1 } ) ).toBe( false );
	} );

	test( 'オブジェクトでない値の場合 true を返す', () => {
		// @ts-ignore
		expect( isEmpty( null ) ).toBe( true );
		// @ts-ignore
		expect( isEmpty( undefined ) ).toBe( true );
		// @ts-ignore
		expect( isEmpty( 123 ) ).toBe( true );
		// @ts-ignore
		expect( isEmpty( 'string' ) ).toBe( true );
	} );
} );
