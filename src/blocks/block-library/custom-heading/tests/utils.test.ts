import type { Attributes } from '../types';
import { getMainTextClasses, getMainTextStyles } from '../utils';

const getBaseAttributes = (): Attributes => ( {
	content: '',
	level: 2,
} );

const responsiveFontSizeKeys = {
	desktop: '--ystdb--desktop--heading--font-size',
	tablet: '--ystdb--tablet--heading--font-size',
	mobile: '--ystdb--mobile--heading--font-size',
} as const;

const responsiveSpacingKeys = {
	desktopMarginTop: '--ystdb--desktop--custom-heading--margin-top',
	tabletMarginRight: '--ystdb--tablet--custom-heading--margin-right',
	mobilePaddingBottom: '--ystdb--mobile--custom-heading--padding-bottom',
} as const;

describe( 'Custom Heading Block utils', () => {
	describe( 'getMainTextClasses', () => {
		it( '最小限の属性では基本クラスのみ返す', () => {
			const classes = getMainTextClasses( getBaseAttributes() );

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );

		it( 'フォントサイズクラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				fontSize: 'large',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'font-size-large' );
		} );

		it( '文字色クラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				textColor: 'ys-green',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'color-ys-green' );
		} );

		it( 'スタイルクリアクラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				clearStyle: true,
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'is-clear-style' );
		} );

		it( '文字揃えクラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				textAlign: 'center',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'has-text-align-center' );
		} );

		it( 'サブテキストがある場合は文字揃えクラスを追加しない', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				hasSubText: true,
				textAlign: 'center',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).not.toContain( 'has-text-align-center' );
		} );

		it( '複数の属性から必要なクラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				fontSize: 'large',
				textColor: 'ys-green',
				clearStyle: true,
				textAlign: 'right',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'font-size-large' );
			expect( classes ).toContain( 'color-ys-green' );
			expect( classes ).toContain( 'is-clear-style' );
			expect( classes ).toContain( 'has-text-align-right' );
		} );
	} );

	describe( 'getMainTextStyles', () => {
		it( '最小限の属性では有効なスタイル値を返さない', () => {
			const styles = getMainTextStyles( getBaseAttributes() );

			expect( Object.values( styles ).filter( Boolean ) ).toHaveLength(
				0
			);
		} );

		it( 'カスタムフォントサイズをfontSizeスタイルへ変換する', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				customFontSize: '15px',
			} );

			expect( styles.fontSize ).toBe( '15px' );
		} );

		it( '定義済みフォントサイズがある場合はカスタムフォントサイズを出力しない', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				fontSize: 'large',
				customFontSize: '15px',
			} );

			expect( styles.fontSize ).toBeUndefined();
		} );

		it.each( [
			[
				'desktopのみ',
				{ desktop: '32px' },
				{
					[ responsiveFontSizeKeys.desktop ]: '32px',
				},
			],
			[
				'tabletのみ',
				{ tablet: '24px' },
				{
					[ responsiveFontSizeKeys.tablet ]: '24px',
				},
			],
			[
				'mobileのみ',
				{ mobile: '16px' },
				{
					[ responsiveFontSizeKeys.mobile ]: '16px',
				},
			],
			[
				'desktopとtablet',
				{ desktop: '32px', tablet: '24px' },
				{
					[ responsiveFontSizeKeys.desktop ]: '32px',
					[ responsiveFontSizeKeys.tablet ]: '24px',
				},
			],
			[
				'desktopとmobile',
				{ desktop: '32px', mobile: '16px' },
				{
					[ responsiveFontSizeKeys.desktop ]: '32px',
					[ responsiveFontSizeKeys.mobile ]: '16px',
				},
			],
			[
				'tabletとmobile',
				{ tablet: '24px', mobile: '16px' },
				{
					[ responsiveFontSizeKeys.tablet ]: '24px',
					[ responsiveFontSizeKeys.mobile ]: '16px',
				},
			],
			[
				'desktopとtabletとmobile',
				{ desktop: '32px', tablet: '24px', mobile: '16px' },
				{
					[ responsiveFontSizeKeys.desktop ]: '32px',
					[ responsiveFontSizeKeys.tablet ]: '24px',
					[ responsiveFontSizeKeys.mobile ]: '16px',
				},
			],
		] )(
			'レスポンシブフォントサイズをCSSカスタムプロパティへ変換する: %s',
			( _label, responsiveFontSize, expectedStyles ) => {
				const styles = getMainTextStyles( {
					...getBaseAttributes(),
					responsiveFontSize,
				} );

				expect( styles ).toMatchObject( expectedStyles );
				expect( styles.fontSize ).toBeUndefined();

				Object.values( responsiveFontSizeKeys ).forEach( ( key ) => {
					if ( ! Object.hasOwn( expectedStyles, key ) ) {
						expect( styles[ key ] ).toBeUndefined();
					}
				} );
			}
		);

		it( 'レスポンシブフォントサイズがある場合はカスタムフォントサイズを出力しない', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				customFontSize: '15px',
				responsiveFontSize: {
					desktop: '32px',
				},
			} );

			expect( styles ).toMatchObject( {
				'--ystdb--desktop--heading--font-size': '32px',
			} );
			expect( styles.fontSize ).toBeUndefined();
		} );

		it( '文字装飾系の属性をスタイルへ変換する', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				customTextColor: '#008000',
				fontStyle: 'italic',
				fontWeight: '700',
				letterSpacing: '0.1em',
				lineHeight: '1.5',
				fontFamily: 'Georgia, serif',
			} );

			expect( styles ).toMatchObject( {
				color: '#008000',
				fontStyle: 'italic',
				fontWeight: '700',
				letterSpacing: '0.1em',
				lineHeight: '1.5',
				fontFamily: 'Georgia, serif',
			} );
		} );

		it( '通常の外側余白と内側余白をスタイルへ変換する', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				margin: {
					top: '1rem',
					bottom: '2rem',
				},
				padding: {
					left: 'var:preset|spacing|40',
					right: '3rem',
				},
			} );

			expect( styles ).toMatchObject( {
				['margin-top']: '1rem',
				['margin-bottom']: '2rem',
				['padding-left']: 'var(--wp--preset--spacing--40)',
				['padding-right']: '3rem',
			} );
		} );

		it( 'レスポンシブ余白をCSSカスタムプロパティへ変換する', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				responsiveMargin: {
					desktop: {
						top: '1rem',
					},
					tablet: {
						right: '2rem',
					},
				},
				responsivePadding: {
					mobile: {
						bottom: 'var:preset|spacing|40',
					},
				},
			} );

			expect( styles ).toMatchObject( {
				[ responsiveSpacingKeys.desktopMarginTop ]: '1rem',
				[ responsiveSpacingKeys.tabletMarginRight ]: '2rem',
				[ responsiveSpacingKeys.mobilePaddingBottom ]:
					'var(--wp--preset--spacing--40)',
			} );
		} );

		it( 'レスポンシブ余白と通常余白があった場合、レスポンシブを優先する', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				margin: {
					top: '1rem',
					bottom: '2rem',
				},
				responsiveMargin: {
					tablet: {
						right: 'var:preset|spacing|40',
					},
				},
			} );

			expect( styles ).toMatchObject( {
				[ responsiveSpacingKeys.tabletMarginRight ]: 'var(--wp--preset--spacing--40)',
			} );
		} );
	} );
} );
