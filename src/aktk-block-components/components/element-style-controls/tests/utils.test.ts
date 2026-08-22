import { hasElementStyleValue, updateElementStyle } from '../utils';

describe( 'element style controls utils', () => {
	it( '既存の区分を維持したまま指定区分を更新する', () => {
		expect(
			updateElementStyle( { color: { text: '#333333' } }, 'spacing', {
				margin: { top: '1rem' },
			} )
		).toEqual( {
			color: { text: '#333333' },
			spacing: { margin: { top: '1rem' } },
		} );
	} );

	it( '最後の値を削除した場合は空オブジェクトを残さない', () => {
		expect(
			updateElementStyle(
				{ typography: { fontSize: '1rem' } },
				'typography',
				undefined
			)
		).toBeUndefined();
	} );

	it( '空オブジェクトを未設定として判定する', () => {
		expect( hasElementStyleValue( undefined ) ).toBe( false );
		expect( hasElementStyleValue( {} ) ).toBe( false );
		expect( hasElementStyleValue( { top: '1rem' } ) ).toBe( true );
	} );
} );
