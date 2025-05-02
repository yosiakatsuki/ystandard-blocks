import {
	deleteUndefined,
	isObject,
	isEmpty,
	stripUndefined,
	isResponsive,
} from '../index';

describe( 'deleteUndefined', () => {
	it( '空のプロパティを削除する', () => {
		const input = { a: 1, b: undefined, c: null, d: '', e: 0 };
		const expectedOutput = { a: 1, c: null, d: '', e: 0 };
		expect( deleteUndefined( input ) ).toEqual( expectedOutput );
	} );
} );

describe( 'isObject', () => {
	it( 'オブジェクトである場合 true を返す', () => {
		expect( isObject( {} ) ).toBe( true );
		expect( isObject( [] ) ).toBe( true );
		expect( isObject( new Date() ) ).toBe( true );
	} );

	it( 'オブジェクトでない場合 false を返す', () => {
		expect( isObject( null ) ).toBe( false );
		expect( isObject( undefined ) ).toBe( false );
		expect( isObject( 123 ) ).toBe( false );
		expect( isObject( 'string' ) ).toBe( false );
	} );
} );

describe( 'isEmpty', () => {
	it( 'オブジェクトが空の場合 true を返す', () => {
		expect( isEmpty( {} ) ).toBe( true );
	} );

	it( 'オブジェクトが空でない場合 false を返す', () => {
		expect( isEmpty( { a: 1 } ) ).toBe( false );
	} );

	it( 'オブジェクトでない値の場合 true を返す', () => {
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

describe( 'stripUndefined', () => {
	it( '空のプロパティを削除する', () => {
		const input = { a: 1, b: undefined, c: null, d: '', e: 0 };
		const expectedOutput = { a: 1, c: null, d: '', e: 0 };
		expect( stripUndefined( input ) ).toEqual( expectedOutput );
	} );
	it( '深い階層のundefinedを削除する', () => {
		const input = {
			a: 1,
			b: {
				c: undefined,
				d: {
					e: undefined,
					f: 2,
				},
			},
		};
		const expectedOutput = {
			a: 1,
			b: {
				d: {
					f: 2,
				},
			},
		};
		expect( stripUndefined( input ) ).toEqual( expectedOutput );
	} );
	it( '深い階層で下層がすべてundefinedのキーが含まれている場合', () => {
		const input = {
			a: 1,
			b: {
				c: undefined,
				d: {
					e: undefined,
					f: undefined,
				},
			},
		};
		const expectedOutput = {
			a: 1,
		};
		expect( stripUndefined( input ) ).toEqual( expectedOutput );
	} );
} );

describe( 'isResponsive', () => {
	it( 'レスポンシブなオブジェクトの場合 true を返す', () => {
		const input = {
			desktop: 1,
			tablet: 2,
			mobile: 3,
		};
		expect( isResponsive( input ) ).toBe( true );
	} );

	it( 'レスポンシブでないオブジェクトの場合 false を返す', () => {
		const input = {
			a: 1,
			b: 2,
		};
		expect( isResponsive( input ) ).toBe( false );
	} );
} );
