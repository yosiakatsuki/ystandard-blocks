import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';

import type { Attributes } from '../types';
import {
	getMainResponsiveFontSize,
	getMainTextClasses,
	getMainTextStyles,
	updateMainResponsiveFontSize,
} from '../utils';

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

const getResponsiveFontSizeAttributes = (
	fontSize: ResponsiveFontSize
): Attributes => ( {
	...getBaseAttributes(),
	style: {
		ystdb: {
			customHeading: {
				responsive: {
					main: {
						typography: {
							fontSize,
						},
					},
				},
			},
		},
	},
} );

describe( 'Custom Heading Block utils', () => {
	describe( 'getMainTextClasses', () => {
		it( '最小限の属性では基本クラスのみ返す', () => {
			const classes = getMainTextClasses( getBaseAttributes() );

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );

		it( 'フォントサイズクラスはBlock Supportsに任せる', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				fontSize: 'large',
			} );

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );

		it( '文字色クラスはBlock Supportsに任せる', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				textColor: 'ys-green',
			} );

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );

		it( 'スタイルクリアクラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				clearStyle: true,
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).toContain( 'is-clear-style' );
		} );

		it( '文字揃えクラスはBlock Supportsに任せる', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				style: {
					typography: {
						textAlign: 'center',
					},
				},
			} );

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );

		it( '複数の属性から必要なクラスを追加する', () => {
			const classes = getMainTextClasses( {
				...getBaseAttributes(),
				fontSize: 'large',
				textColor: 'ys-green',
				clearStyle: true,
				style: {
					typography: {
						textAlign: 'right',
					},
				},
			} );

			expect( classes ).toContain( 'ystdb-custom-heading' );
			expect( classes ).not.toContain( 'font-size-large' );
			expect( classes ).not.toContain( 'color-ys-green' );
			expect( classes ).toContain( 'is-clear-style' );
			expect( classes ).not.toContain( 'has-text-align-right' );
		} );
	} );

	describe( 'getMainTextStyles', () => {
		it( '最小限の属性では有効なスタイル値を返さない', () => {
			const styles = getMainTextStyles( getBaseAttributes() );

			expect( Object.values( styles ).filter( Boolean ) ).toHaveLength(
				0
			);
		} );

		it( '単一フォントサイズの反映はBlock Supportsに任せる', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				style: {
					typography: {
						fontSize: '15px',
					},
				},
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
				const styles = getMainTextStyles(
					getResponsiveFontSizeAttributes( responsiveFontSize )
				);

				expect( styles ).toMatchObject( expectedStyles );
				expect( styles.fontSize ).toBeUndefined();

				Object.values( responsiveFontSizeKeys ).forEach( ( key ) => {
					if ( ! Object.hasOwn( expectedStyles, key ) ) {
						expect( styles[ key ] ).toBeUndefined();
					}
				} );
			}
		);

		it( '単一設定とレスポンシブ設定を別々に反映する', () => {
			const attributes = getResponsiveFontSizeAttributes( {
				desktop: '32px',
			} );
			attributes.style = {
				...attributes.style,
				typography: {
					fontSize: '15px',
				},
			};
			const styles = getMainTextStyles( attributes );

			expect( styles ).toMatchObject( {
				'--ystdb--desktop--heading--font-size': '32px',
			} );
			expect( styles.fontSize ).toBeUndefined();
		} );

		it( '単一タイポグラフィ設定の反映はBlock Supportsに任せる', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				fontFamily: 'Georgia, serif',
				style: {
					color: {
						text: '#008000',
					},
					typography: {
						fontStyle: 'italic',
						fontWeight: '700',
						letterSpacing: '0.1em',
						lineHeight: '1.5',
					},
				},
			} );

			expect( styles.color ).toBeUndefined();
			expect( styles.fontStyle ).toBeUndefined();
			expect( styles.fontWeight ).toBeUndefined();
			expect( styles.letterSpacing ).toBeUndefined();
			expect( styles.lineHeight ).toBeUndefined();
			expect( styles.fontFamily ).toBeUndefined();
		} );

		it( 'テキストを合わせる場合はレスポンシブフォントサイズを出力しない', () => {
			const attributes = getResponsiveFontSizeAttributes( {
				desktop: '32px',
				mobile: '16px',
			} );
			attributes.fitText = true;

			const styles = getMainTextStyles( attributes );

			expect( styles[ responsiveFontSizeKeys.desktop ] ).toBeUndefined();
			expect( styles[ responsiveFontSizeKeys.mobile ] ).toBeUndefined();
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
				marginTop: '1rem',
				marginBottom: '2rem',
				paddingLeft: 'var(--wp--preset--spacing--40)',
				paddingRight: '3rem',
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
				[ responsiveSpacingKeys.tabletMarginRight ]:
					'var(--wp--preset--spacing--40)',
			} );
		} );
	} );

	describe( 'レスポンシブフォントサイズ属性', () => {
		it( 'style属性へ保存した値を取得する', () => {
			const attributes = getResponsiveFontSizeAttributes( {
				desktop: '32px',
				tablet: '24px',
			} );

			expect( getMainResponsiveFontSize( attributes ) ).toEqual( {
				desktop: '32px',
				tablet: '24px',
			} );
		} );

		it( '既存styleを保ったまま値を更新する', () => {
			const style = updateMainResponsiveFontSize(
				{
					typography: {
						fontSize: '20px',
					},
				},
				{
					mobile: '16px',
				}
			);

			expect( style ).toEqual( {
				typography: {
					fontSize: '20px',
				},
				ystdb: {
					customHeading: {
						responsive: {
							main: {
								typography: {
									fontSize: {
										mobile: '16px',
									},
								},
							},
						},
					},
				},
			} );
		} );

		it( 'リセット時は空の独自style階層を残さない', () => {
			const attributes = getResponsiveFontSizeAttributes( {
				desktop: '32px',
			} );

			expect(
				updateMainResponsiveFontSize( attributes.style, undefined )
			).toBeUndefined();
		} );
	} );
} );
