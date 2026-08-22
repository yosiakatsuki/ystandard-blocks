import {
	hasResponsiveTextAlignValue,
	updateResponsiveTextAlign,
} from '../utils';

describe( 'responsive-text-align-control utils', () => {
	it( '指定デバイスの文字揃えだけを更新する', () => {
		expect(
			updateResponsiveTextAlign(
				{ desktop: 'left', mobile: 'right' },
				'tablet',
				'center'
			)
		).toEqual( {
			desktop: 'left',
			tablet: 'center',
			mobile: 'right',
		} );
	} );

	it( '最後の設定を解除した場合は空オブジェクトを残さない', () => {
		expect(
			updateResponsiveTextAlign(
				{ desktop: 'left' },
				'desktop',
				undefined
			)
		).toBeUndefined();
	} );

	it( '設定済みのデバイスがある場合だけ値ありと判定する', () => {
		expect( hasResponsiveTextAlignValue( { tablet: 'center' } ) ).toBe(
			true
		);
		expect( hasResponsiveTextAlignValue( {} ) ).toBe( false );
	} );
} );
