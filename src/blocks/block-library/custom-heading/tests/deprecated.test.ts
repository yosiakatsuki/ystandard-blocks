import { deprecatedV3253 } from '../deprecated/v3_25_3';

describe( 'Custom Heading Block deprecated', () => {
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

	it( 'サブテキスト使用時は旧仕様で無効だった文字揃えを移行しない', () => {
		const attributes = deprecatedV3253.migrate( {
			content: '見出し',
			level: 2,
			hasSubText: true,
			textAlign: 'center',
		} );

		expect( attributes ).toEqual( {
			content: '見出し',
			level: 2,
			hasSubText: true,
		} );
	} );
} );
