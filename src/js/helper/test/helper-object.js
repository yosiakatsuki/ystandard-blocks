import { object2Array } from '../object.js';

describe( 'object2Array', () => {
	test( 'object to Array', () => {
		const testObject = {
			key1: { label: 'key1', value: 1 },
			key2: { label: 'key2', value: 2 },
			key3: { label: 'key3', value: 3 },
		};
		expect( object2Array( testObject ) ).toEqual( [
			{ label: 'key1', value: 1 },
			{ label: 'key2', value: 2 },
			{ label: 'key3', value: 3 },
		] );
	} );
	test( 'input array', () => {
		const testObject = [
			{ label: 'key1', value: 1 },
			{ label: 'key2', value: 2 },
			{ label: 'key3', value: 3 },
		];
		expect( object2Array( testObject ) ).toEqual( [
			{ label: 'key1', value: 1 },
			{ label: 'key2', value: 2 },
			{ label: 'key3', value: 3 },
		] );
	} );
} );
