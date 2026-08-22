import { hasResponsiveLayoutValue, updateResponsiveLayout } from '../utils';

describe( 'responsive-layout-control utils', () => {
	it( '指定デバイスの配置だけを更新する', () => {
		expect(
			updateResponsiveLayout(
				{
					desktop: { orientation: 'horizontal' },
					mobile: { alignItems: 'center' },
				},
				'tablet',
				{ justifyContent: 'space-between' }
			)
		).toEqual( {
			desktop: { orientation: 'horizontal' },
			tablet: { justifyContent: 'space-between' },
			mobile: { alignItems: 'center' },
		} );
	} );

	it( 'デバイス設定を解除したときに空オブジェクトを残さない', () => {
		expect(
			updateResponsiveLayout(
				{ desktop: { orientation: 'horizontal' } },
				'desktop',
				undefined
			)
		).toBeUndefined();
	} );

	it( '空のデバイス配置を未設定として扱う', () => {
		expect( hasResponsiveLayoutValue( { desktop: {} } ) ).toBe( false );
	} );
} );
