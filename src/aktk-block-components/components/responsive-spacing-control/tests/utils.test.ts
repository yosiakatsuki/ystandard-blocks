import { hasResponsiveSpacingValue, updateResponsiveSpacing } from '../utils';

describe( 'responsive-spacing-control utils', () => {
	it( '指定デバイスの値だけを更新する', () => {
		expect(
			updateResponsiveSpacing(
				{
					desktop: { top: '1rem' },
					mobile: { bottom: '2rem' },
				},
				'tablet',
				{ left: '3rem' }
			)
		).toEqual( {
			desktop: { top: '1rem' },
			tablet: { left: '3rem' },
			mobile: { bottom: '2rem' },
		} );
	} );

	it( 'デバイスの値を解除したときに空オブジェクトを残さない', () => {
		expect(
			updateResponsiveSpacing(
				{
					desktop: { top: '1rem' },
				},
				'desktop',
				undefined
			)
		).toBeUndefined();
	} );

	it( '0を有効な設定値として扱う', () => {
		expect(
			hasResponsiveSpacingValue( {
				desktop: { top: '0' },
			} )
		).toBe( true );
	} );

	it( '空のデバイス値を未設定として扱う', () => {
		expect(
			hasResponsiveSpacingValue( {
				desktop: {},
			} )
		).toBe( false );
	} );
} );
