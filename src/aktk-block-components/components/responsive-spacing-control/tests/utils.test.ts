import {
	hasResponsiveSpacingSizeValue,
	hasResponsiveSpacingValue,
	updateResponsiveSpacing,
	updateResponsiveSpacingSize,
} from '../utils';

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

	it( '単一余白値の指定デバイスだけを更新する', () => {
		expect(
			updateResponsiveSpacingSize(
				{ desktop: '1rem', mobile: '2rem' },
				'tablet',
				'var:preset|spacing|40'
			)
		).toEqual( {
			desktop: '1rem',
			tablet: 'var:preset|spacing|40',
			mobile: '2rem',
		} );
	} );

	it( '単一余白値の空文字を未設定として扱う', () => {
		expect(
			hasResponsiveSpacingSizeValue( {
				desktop: '',
			} )
		).toBe( false );
	} );
} );
