import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import type { ResponsiveSpacing } from '@aktk/block-components/components/responsive-spacing-control';

import type { Attributes } from '../types';
import {
	getMainResponsiveSpacing,
	getMainResponsiveFontSize,
	getCustomHeadingElementStyle,
	getHeadingGroupClasses,
	getMainTextClasses,
	getMainTextStyles,
	updateMainResponsiveSpacing,
	updateMainResponsiveFontSize,
	updateCustomHeadingElementStyle,
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

const getResponsiveSpacingAttributes = (
	margin?: ResponsiveSpacing,
	padding?: ResponsiveSpacing
): Attributes => ( {
	...getBaseAttributes(),
	style: {
		ystdb: {
			customHeading: {
				responsive: {
					main: {
						spacing: {
							margin,
							padding,
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
			const classes = getMainTextClasses();

			expect( classes ).toBe( 'ystdb-custom-heading' );
		} );
	} );

	describe( 'getHeadingGroupClasses', () => {
		it( '並び方向が未設定の場合は基本クラスのみ返す', () => {
			expect( getHeadingGroupClasses( getBaseAttributes() ) ).toBe(
				'ystdb-custom-heading-group'
			);
		} );

		it( '横並びの場合は方向クラスを追加する', () => {
			expect(
				getHeadingGroupClasses( {
					...getBaseAttributes(),
					style: {
						ystdb: {
							customHeading: {
								group: {
									layout: {
										orientation: 'horizontal',
									},
								},
							},
						},
					},
				} )
			).toBe( 'ystdb-custom-heading-group is-horizontal' );
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

		it( 'レスポンシブ余白をCSSカスタムプロパティへ変換する', () => {
			const styles = getMainTextStyles(
				getResponsiveSpacingAttributes(
					{
						desktop: {
							top: '1rem',
						},
						tablet: {
							right: '2rem',
						},
					},
					{
						mobile: {
							bottom: 'var:preset|spacing|40',
						},
					}
				)
			);

			expect( styles ).toMatchObject( {
				[ responsiveSpacingKeys.desktopMarginTop ]: '1rem',
				[ responsiveSpacingKeys.tabletMarginRight ]: '2rem',
				[ responsiveSpacingKeys.mobilePaddingBottom ]:
					'var(--wp--preset--spacing--40)',
			} );
		} );

		it( 'レスポンシブ余白のプリセット値をCSS変数へ変換する', () => {
			const styles = getMainTextStyles(
				getResponsiveSpacingAttributes( {
					tablet: {
						right: 'var:preset|spacing|40',
					},
				} )
			);

			expect( styles ).toMatchObject( {
				[ responsiveSpacingKeys.tabletMarginRight ]:
					'var(--wp--preset--spacing--40)',
			} );
		} );
	} );

	describe( 'サブテキストと見出しグループのスタイル属性', () => {
		it( '対象ごとのスタイルを取得する', () => {
			const attributes: Attributes = {
				...getBaseAttributes(),
				style: {
					ystdb: {
						customHeading: {
							sub: {
								color: { text: '#333333' },
							},
							group: {
								spacing: { margin: { top: '2rem' } },
							},
						},
					},
				},
			};

			expect( getCustomHeadingElementStyle( attributes, 'sub' ) ).toEqual(
				{
					color: { text: '#333333' },
				}
			);
			expect(
				getCustomHeadingElementStyle( attributes, 'group' )
			).toEqual( {
				spacing: { margin: { top: '2rem' } },
			} );
		} );

		it( '既存styleを保ったまま対象要素だけを更新する', () => {
			const style = updateCustomHeadingElementStyle(
				{
					typography: { fontSize: '2rem' },
					ystdb: {
						customHeading: {
							group: { color: { background: '#ffffff' } },
						},
					},
				},
				'sub',
				{ typography: { fontSize: '1rem' } }
			);

			expect( style ).toEqual( {
				typography: { fontSize: '2rem' },
				ystdb: {
					customHeading: {
						group: { color: { background: '#ffffff' } },
						sub: { typography: { fontSize: '1rem' } },
					},
				},
			} );
		} );
	} );

	describe( 'レスポンシブ余白属性', () => {
		it( 'style属性へ保存した値を取得する', () => {
			const attributes = getResponsiveSpacingAttributes( {
				desktop: { top: '2rem' },
			} );

			expect( getMainResponsiveSpacing( attributes ) ).toEqual( {
				margin: {
					desktop: { top: '2rem' },
				},
			} );
		} );

		it( '既存styleを保ったまま値を更新する', () => {
			const style = updateMainResponsiveSpacing(
				{
					typography: { fontSize: '20px' },
				},
				{
					padding: {
						mobile: { bottom: '1rem' },
					},
				}
			);

			expect( style ).toEqual( {
				typography: { fontSize: '20px' },
				ystdb: {
					customHeading: {
						responsive: {
							main: {
								spacing: {
									padding: {
										mobile: { bottom: '1rem' },
									},
								},
							},
						},
					},
				},
			} );
		} );

		it( 'リセット時は空の独自style階層を残さない', () => {
			const attributes = getResponsiveSpacingAttributes( {
				desktop: { top: '2rem' },
			} );

			expect(
				updateMainResponsiveSpacing( attributes.style, undefined )
			).toBeUndefined();
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
