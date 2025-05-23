import { isSplit } from './utils';
import type { FlatBorder, SplitBorders } from './types';
import { describe, it, expect } from '@jest/globals';

describe( 'isSplit関数', () => {
	it( 'SplitBordersオブジェクトの場合、trueを返すべき', () => {
		const splitBorders: SplitBorders = {
			top: { color: 'red', style: 'solid', width: '1px' },
			right: { color: 'blue', style: 'dotted', width: '2px' },
			bottom: { color: 'green', style: 'dashed', width: '3px' },
			left: { color: 'yellow', style: 'double', width: '4px' },
		};
		expect( isSplit( splitBorders ) ).toBe( true );
	} );

	it( 'FlatBorderオブジェクトの場合、falseを返すべき', () => {
		const flatBorder: FlatBorder = {
			color: 'red',
			style: 'solid',
			width: '1px',
		};
		expect( isSplit( flatBorder ) ).toBe( false );
	} );

	it( 'SplitBordersプロパティを持たないオブジェクトの場合、falseを返すべき', () => {
		const randomObject = { height: '100px', width: '200px' };
		expect( isSplit( randomObject as SplitBorders | FlatBorder ) ).toBe(
			false
		);
	} );

	it( 'nullの場合、falseを返すべき', () => {
		expect( isSplit( null as unknown as SplitBorders | FlatBorder ) ).toBe(
			false
		);
	} );

	it( 'undefinedの場合、falseを返すべき', () => {
		expect(
			isSplit( undefined as unknown as SplitBorders | FlatBorder )
		).toBe( false );
	} );
} );
