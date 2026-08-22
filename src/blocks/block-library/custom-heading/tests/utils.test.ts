import type { ResponsiveFontSize } from '@aktk/block-components/components/responsive-font-size-control';
import type { ResponsiveSpacing } from '@aktk/block-components/components/responsive-spacing-control';

import type { Attributes } from '../types';
import {
	getMainResponsiveSpacing,
	getMainResponsiveFontSize,
	getMainResponsiveTextAlign,
	getCustomHeadingElementStyle,
	getCustomHeadingResponsiveElementStyle,
	getGroupResponsiveStyles,
	getHeadingGroupClasses,
	getMainTextClasses,
	getMainTextBlockSupportAttributes,
	getMainTextStyles,
	getSubTextResponsiveStyles,
	updateMainResponsiveSpacing,
	updateMainResponsiveFontSize,
	updateMainResponsiveTextAlign,
	updateCustomHeadingElementStyle,
	updateCustomHeadingResponsiveElementStyle,
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

		it( 'サブテキストありの場合は文字揃えクラスを追加する', () => {
			expect(
				getHeadingGroupClasses( {
					...getBaseAttributes(),
					hasSubText: true,
					style: { typography: { textAlign: 'center' } },
				} )
			).toBe( 'ystdb-custom-heading-group has-text-align-center' );
		} );
	} );

	describe( 'getMainTextBlockSupportAttributes', () => {
		it( 'サブテキストありの場合は文字揃えだけを見出しから除外する', () => {
			expect(
				getMainTextBlockSupportAttributes( {
					...getBaseAttributes(),
					hasSubText: true,
					style: {
						typography: {
							fontSize: '2rem',
							textAlign: 'right',
						},
					},
				} ).style
			).toEqual( { typography: { fontSize: '2rem' } } );
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

		it( '見出しのみの場合はレスポンシブ文字揃えを出力する', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				style: {
					ystdb: {
						customHeading: {
							responsive: {
								main: {
									typography: {
										textAlign: { tablet: 'center' },
									},
								},
							},
						},
					},
				},
			} );

			expect( styles ).toMatchObject( {
				'--ystdb--tablet--custom-heading--text-align': 'center',
			} );
		} );

		it( 'サブテキストありの場合は見出しのレスポンシブ文字揃えを出力しない', () => {
			const styles = getMainTextStyles( {
				...getBaseAttributes(),
				hasSubText: true,
				style: {
					ystdb: {
						customHeading: {
							responsive: {
								main: {
									typography: {
										textAlign: { tablet: 'center' },
									},
								},
							},
						},
					},
				},
			} );

			expect(
				styles[ '--ystdb--tablet--custom-heading--text-align' ]
			).toBeUndefined();
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

	describe( 'サブテキストと見出しグループのレスポンシブ属性', () => {
		const attributes: Attributes = {
			...getBaseAttributes(),
			style: {
				ystdb: {
					customHeading: {
						responsive: {
							sub: {
								typography: {
									fontSize: { tablet: '1rem' },
								},
								spacing: {
									padding: {
										mobile: { left: '2rem' },
									},
								},
							},
							group: {
								typography: {
									textAlign: { desktop: 'right' },
								},
								spacing: {
									blockGap: {
										desktop: 'var:preset|spacing|40',
									},
									margin: {
										tablet: { top: '3rem' },
									},
								},
								layout: {
									mobile: {
										orientation: 'horizontal',
										alignItems: 'baseline',
										justifyContent: 'center',
									},
								},
							},
						},
					},
				},
			},
		};

		it( '対象ごとのレスポンシブ値を取得する', () => {
			expect(
				getCustomHeadingResponsiveElementStyle( attributes, 'sub' )
			).toEqual( {
				typography: { fontSize: { tablet: '1rem' } },
				spacing: { padding: { mobile: { left: '2rem' } } },
			} );
		} );

		it( 'サブテキストの文字サイズと余白をCSS変数へ変換する', () => {
			expect( getSubTextResponsiveStyles( attributes ) ).toEqual( {
				'--ystdb--tablet--custom-heading-sub--font-size': '1rem',
				'--ystdb--mobile--custom-heading-sub--padding-left': '2rem',
			} );
		} );

		it( '見出しグループの間隔と配置をCSS変数へ変換する', () => {
			expect( getGroupResponsiveStyles( attributes ) ).toEqual( {
				'--ystdb--desktop--custom-heading-group--text-align': 'right',
				'--ystdb--desktop--custom-heading-group--block-gap':
					'var(--wp--preset--spacing--40)',
				'--ystdb--tablet--custom-heading-group--margin-top': '3rem',
				'--ystdb--mobile--custom-heading-group--flex-direction': 'row',
				'--ystdb--mobile--custom-heading-group--align-items':
					'baseline',
				'--ystdb--mobile--custom-heading-group--justify-content':
					'center',
			} );
		} );

		it( '並び方向だけがある場合はブロックの初期配置も出力する', () => {
			const orientationOnlyAttributes: Attributes = {
				...getBaseAttributes(),
				style: {
					ystdb: {
						customHeading: {
							responsive: {
								group: {
									layout: {
										tablet: {
											orientation: 'horizontal',
										},
									},
								},
							},
						},
					},
				},
			};

			expect(
				getGroupResponsiveStyles( orientationOnlyAttributes )
			).toEqual( {
				'--ystdb--tablet--custom-heading-group--flex-direction': 'row',
				'--ystdb--tablet--custom-heading-group--align-items':
					'baseline',
				'--ystdb--tablet--custom-heading-group--justify-content':
					'flex-start',
			} );
		} );

		it( '既存styleを保ったまま対象要素だけを更新する', () => {
			expect(
				updateCustomHeadingResponsiveElementStyle(
					attributes.style,
					'sub',
					{ typography: { fontSize: { desktop: '2rem' } } }
				)
			).toMatchObject( {
				ystdb: {
					customHeading: {
						responsive: {
							sub: {
								typography: {
									fontSize: { desktop: '2rem' },
								},
							},
							group: attributes.style?.ystdb?.customHeading
								?.responsive?.group,
						},
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

	describe( 'レスポンシブ文字揃え属性', () => {
		it( 'style属性へ保存した値を取得する', () => {
			const attributes: Attributes = {
				...getBaseAttributes(),
				style: {
					ystdb: {
						customHeading: {
							responsive: {
								main: {
									typography: {
										textAlign: { mobile: 'right' },
									},
								},
							},
						},
					},
				},
			};

			expect( getMainResponsiveTextAlign( attributes ) ).toEqual( {
				mobile: 'right',
			} );
		} );

		it( '既存のレスポンシブ文字サイズを保って更新する', () => {
			expect(
				updateMainResponsiveTextAlign(
					{
						ystdb: {
							customHeading: {
								responsive: {
									main: {
										typography: {
											fontSize: { desktop: '2rem' },
										},
									},
								},
							},
						},
					},
					{ tablet: 'center' }
				)
			).toMatchObject( {
				ystdb: {
					customHeading: {
						responsive: {
							main: {
								typography: {
									fontSize: { desktop: '2rem' },
									textAlign: { tablet: 'center' },
								},
							},
						},
					},
				},
			} );
		} );
	} );
} );
