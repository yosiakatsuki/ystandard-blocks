import { presetTokenToCssVar } from '../index';

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
