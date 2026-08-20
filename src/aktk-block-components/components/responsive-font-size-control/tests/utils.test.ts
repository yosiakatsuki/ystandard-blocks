import { fontSizeValueToCssValue, updateResponsiveFontSize } from '../utils';

describe( 'fontSizeValueToCssValue', () => {
	it( '数値をpx値へ変換する', () => {
		expect( fontSizeValueToCssValue( 32 ) ).toBe( '32px' );
	} );

	it( 'CSS値をそのまま保持する', () => {
		expect( fontSizeValueToCssValue( 'clamp(24px, 4vw, 48px)' ) ).toBe(
			'clamp(24px, 4vw, 48px)'
		);
	} );

	it( 'プリセットの実値を優先する', () => {
		expect(
			fontSizeValueToCssValue( 12, {
				name: '大',
				slug: 'large',
				size: 36,
			} )
		).toBe( '36px' );
	} );
} );

describe( 'updateResponsiveFontSize', () => {
	it( '指定デバイスだけを更新する', () => {
		expect(
			updateResponsiveFontSize(
				{ desktop: '32px', mobile: '16px' },
				'tablet',
				24
			)
		).toEqual( {
			desktop: '32px',
			tablet: '24px',
			mobile: '16px',
		} );
	} );

	it( 'リセットしたデバイスのキーを削除する', () => {
		expect(
			updateResponsiveFontSize(
				{ desktop: '32px', mobile: '16px' },
				'desktop',
				undefined
			)
		).toEqual( {
			mobile: '16px',
		} );
	} );
} );
