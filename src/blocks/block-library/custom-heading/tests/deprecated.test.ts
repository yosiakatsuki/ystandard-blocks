import { deprecatedV3253 } from '../deprecated/v3_25_3';

describe( 'Custom Heading Block deprecated', () => {
	it( '廃止したスタイル削除設定を現行属性へ移行しない', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			clearStyle: true,
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
		} );
	} );

	it( '任意フォントサイズをコアのstyle属性へ移行する', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			customFontSize: '2rem',
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			style: {
				typography: {
					fontSize: '2rem',
				},
			},
		} );
	} );

	it( 'レスポンシブ値がある場合は旧仕様で無効だった任意値を移行しない', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			customFontSize: '2rem',
			responsiveFontSize: {
				desktop: '32px',
				mobile: '16px',
			},
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			style: {
				ystdb: {
					customHeading: {
						responsive: {
							main: {
								typography: {
									fontSize: {
										desktop: '32px',
										mobile: '16px',
									},
								},
							},
						},
					},
				},
			},
		} );
	} );

	it( 'プリセットがある場合は旧仕様で無効だった任意値とレスポンシブ値を移行しない', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			fontSize: 'large',
			customFontSize: '2rem',
			responsiveFontSize: {
				desktop: '32px',
			},
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			fontSize: 'large',
		} );
	} );

	it( '旧タイポグラフィ属性をコアのstyle属性へ移行する', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			customTextColor: '#123456',
			textAlign: 'center',
			fontFamily: 'Georgia, serif',
			fontStyle: 'italic',
			fontWeight: '700',
			letterSpacing: '0.1em',
			lineHeight: '1.5',
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			style: {
				color: {
					text: '#123456',
				},
				typography: {
					textAlign: 'center',
					fontFamily: 'Georgia, serif',
					fontStyle: 'italic',
					fontWeight: '700',
					letterSpacing: '0.1em',
					lineHeight: '1.5',
				},
			},
		} );
	} );

	it( '内容のない旧サブテキスト設定を無効へ正規化する', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			hasSubText: true,
			textAlign: 'center',
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			hasSubText: false,
		} );
	} );

	it( '旧余白属性をコアのstyle属性へ移行する', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			margin: {
				top: '1rem',
				bottom: 'var:preset|spacing|40',
			},
			padding: {
				left: '2rem',
			},
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			style: {
				spacing: {
					margin: {
						top: '1rem',
						bottom: 'var:preset|spacing|40',
					},
					padding: {
						left: '2rem',
					},
				},
			},
		} );
	} );

	it( '旧レスポンシブ余白属性をstyle.ystdbへ移行する', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			responsiveMargin: {
				desktop: { top: '2rem' },
			},
			responsivePadding: {
				mobile: { bottom: '1rem' },
			},
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			style: {
				ystdb: {
					customHeading: {
						responsive: {
							main: {
								spacing: {
									margin: {
										desktop: { top: '2rem' },
									},
									padding: {
										mobile: { bottom: '1rem' },
									},
								},
							},
						},
					},
				},
			},
		} );
	} );
} );
