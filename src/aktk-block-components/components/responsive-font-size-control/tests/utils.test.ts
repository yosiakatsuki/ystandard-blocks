import { getComputedFluidTypographyValue } from '@wordpress/block-editor';

import { fontSizeValueToCssValue, updateResponsiveFontSize } from '../utils';

const mockedGetComputedFluidTypographyValue =
	getComputedFluidTypographyValue as jest.Mock;

describe( 'fontSizeValueToCssValue', () => {
	beforeEach( () => {
		mockedGetComputedFluidTypographyValue.mockReset();
		mockedGetComputedFluidTypographyValue.mockReturnValue( null );
	} );

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

	it( '流体プリセットはコアが計算したclamp値を返す', () => {
		const fluidValue =
			'clamp(1rem, 1rem + ((1vw - 0.244rem) * 0.247), 1.125rem)';
		mockedGetComputedFluidTypographyValue.mockReturnValue( fluidValue );

		expect(
			fontSizeValueToCssValue(
				'1.141rem',
				{
					name: '18-16',
					slug: 'ys-18-16',
					size: '1.141rem',
					fluid: {
						min: '1rem',
						max: '1.125rem',
					},
				},
				{
					fluid: {
						minFontSize: '8px',
						minViewportWidth: '390px',
						maxViewportWidth: '1200px',
					},
					layout: {
						wideSize: '1200px',
					},
				}
			)
		).toBe( fluidValue );
		expect( mockedGetComputedFluidTypographyValue ).toHaveBeenCalledWith( {
			minimumFontSize: '1rem',
			maximumFontSize: '1.125rem',
			fontSize: '1.141rem',
			minimumFontSizeLimit: '8px',
			minimumViewportWidth: '390px',
			maximumViewportWidth: '1200px',
		} );
	} );

	it( 'プリセットが流体設定を無効化している場合はsize値を返す', () => {
		expect(
			fontSizeValueToCssValue(
				'1.141rem',
				{
					slug: 'static',
					size: '1.141rem',
					fluid: false,
				},
				{
					fluid: true,
				}
			)
		).toBe( '1.141rem' );
		expect( mockedGetComputedFluidTypographyValue ).not.toHaveBeenCalled();
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
