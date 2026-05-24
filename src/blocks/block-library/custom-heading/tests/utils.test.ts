import type { Attributes } from '../types';
import { getHeadingClasses, getHeadingStyles } from '../utils';

const getBaseAttributes = (): Attributes => ( {
	content: '',
	level: 2,
} );

describe( 'Custom Heading Block utils', () => {
	describe( 'getHeadingClasses', () => {
		it( '最小限の属性では基本クラスのみ返す', () => {
			const classes = getHeadingClasses( getBaseAttributes() );

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );

		it( 'フォントサイズクラスを追加する', () => {
			const classes = getHeadingClasses( {
				...getBaseAttributes(),
				fontSize: 'large',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'font-size-large' );
		} );

		it( '文字色クラスを追加する', () => {
			const classes = getHeadingClasses( {
				...getBaseAttributes(),
				textColor: 'ys-green',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'color-ys-green' );
		} );

		it( 'スタイルクリアクラスを追加する', () => {
			const classes = getHeadingClasses( {
				...getBaseAttributes(),
				clearStyle: true,
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'is-clear-style' );
		} );

		it( '文字揃えクラスを追加する', () => {
			const classes = getHeadingClasses( {
				...getBaseAttributes(),
				textAlign: 'center',
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'has-text-align-center' );
		} );

		it( '複数の属性から必要なクラスを追加する', () => {
			const classes = getHeadingClasses( {
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

	describe( 'getHeadingStyles', () => {
		it( '最小限の属性では有効なスタイル値を返さない', () => {
			const styles = getHeadingStyles( getBaseAttributes() );

			expect( Object.values( styles ).filter( Boolean ) ).toHaveLength(
				0
			);
		} );

		it( 'カスタムフォントサイズをfontSizeスタイルへ変換する', () => {
			const styles = getHeadingStyles( {
				...getBaseAttributes(),
				customFontSize: '15px',
			} );

			expect( styles.fontSize ).toBe( '15px' );
		} );

		it( '定義済みフォントサイズがある場合はカスタムフォントサイズを出力しない', () => {
			const styles = getHeadingStyles( {
				...getBaseAttributes(),
				fontSize: 'large',
				customFontSize: '15px',
			} );

			expect( styles.fontSize ).toBeUndefined();
		} );

		it( 'レスポンシブフォントサイズをCSSカスタムプロパティへ変換する', () => {
			const styles = getHeadingStyles( {
				...getBaseAttributes(),
				responsiveFontSize: {
					desktop: '32px',
					tablet: '24px',
					mobile: '16px',
				},
			} );

			expect( styles ).toMatchObject( {
				'--ystdb--desktop--heading--font-size': '32px',
				'--ystdb--tablet--heading--font-size': '24px',
				'--ystdb--mobile--heading--font-size': '16px',
			} );
			expect( styles.fontSize ).toBeUndefined();
		} );

		it( 'レスポンシブフォントサイズがある場合はカスタムフォントサイズを出力しない', () => {
			const styles = getHeadingStyles( {
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
			const styles = getHeadingStyles( {
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
	} );
} );
