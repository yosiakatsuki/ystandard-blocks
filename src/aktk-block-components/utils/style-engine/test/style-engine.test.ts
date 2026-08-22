import { getResponsiveCustomProperties, presetTokenToCssVar } from '../index';

describe( 'presetTokenToCssVar', () => {
	it( 'ラッパー付き', () => {
		const token = 'var:preset|spacing|60';
		expect( presetTokenToCssVar( token ) ).toBe(
			'var(--wp--preset--spacing--60)'
		);
	} );
	it( 'ラッパー無し', () => {
		const token = 'var:preset|spacing|60';
		expect( presetTokenToCssVar( token, false ) ).toBe(
			'--wp--preset--spacing--60'
		);
	} );

	it( 'spacing 以外', () => {
		const token = 'var:preset|color|primary';
		expect( presetTokenToCssVar( token ) ).toBe(
			'var(--wp--preset--color--primary)'
		);
	} );

	it( 'トークンでない場合', () => {
		const token = '1.5rem';
		expect( presetTokenToCssVar( token ) ).toBe( token );
	} );
} );

describe( 'getResponsiveCustomProperties', () => {
	it( '設定済みのデバイスだけCSSカスタムプロパティへ変換する', () => {
		expect(
			getResponsiveCustomProperties( 'heading--font-size', {
				desktop: '32px',
				mobile: '16px',
			} )
		).toEqual( {
			'--ystdb--desktop--heading--font-size': '32px',
			'--ystdb--mobile--heading--font-size': '16px',
		} );
	} );

	it( '0を有効な値として保持する', () => {
		expect(
			getResponsiveCustomProperties( 'sample', {
				desktop: 0,
			} )
		).toEqual( {
			'--ystdb--desktop--sample': 0,
		} );
	} );

	it( '変換後に無効になった値は出力しない', () => {
		expect(
			getResponsiveCustomProperties(
				'sample',
				{
					desktop: 'keep',
					tablet: 'remove',
				},
				( value ) => ( 'remove' === value ? undefined : value )
			)
		).toEqual( {
			'--ystdb--desktop--sample': 'keep',
		} );
	} );
} );
