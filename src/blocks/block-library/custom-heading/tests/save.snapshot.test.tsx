import React from 'react';
import { render } from '@testing-library/react';
import Save from '../save';

// スナップショットテスト
describe( 'Custom Heading Block <Save /> snapshot', () => {
	it( '001: 最小限の属性', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'カスタム見出し',
					level: 2,
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '002: レベル1の見出し', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'カスタム見出し H1',
					level: 1,
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '003: レベル3の見出し', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'カスタム見出し H3',
					level: 3,
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '004: フォントサイズ指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'フォントサイズ指定',
					level: 2,
					fontSize: 'large',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '005: カスタムフォントサイズ指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'カスタムフォントサイズ指定',
					level: 2,
					customFontSize: '2em',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '006: レスポンシブフォントサイズ指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'レスポンシブフォントサイズ指定',
					level: 2,
					responsiveFontSize: {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '007: テキスト中央揃え', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'テキストセンター揃え',
					level: 2,
					textAlign: 'center',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '008: テキスト右揃え', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'テキスト右揃え',
					level: 2,
					textAlign: 'right',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '009: スタイルクリア有効', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'スタイルクリアあり',
					level: 2,
					clearStyle: true,
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '010: 複数属性の組み合わせ', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '全属性指定',
					level: 3,
					textAlign: 'center',
					fontSize: 'large',
					clearStyle: false,
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '011: カスタムフォントサイズとレスポンシブフォントサイズの組み合わせ', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'カスタム＆レスポンシブ',
					level: 2,
					customFontSize: '2em',
					responsiveFontSize: {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					},
					textAlign: 'center',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	// フォントサイズ優先順位のテスト
	it( '012: フォントサイズとカスタムフォントサイズの組み合わせ（fontSizeが優先）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'fontSize優先',
					level: 2,
					fontSize: 'large',
					customFontSize: '3em',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '013: フォントサイズとレスポンシブフォントサイズの組み合わせ（fontSizeが優先）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'fontSize優先',
					level: 2,
					fontSize: 'large',
					responsiveFontSize: {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '014: 全フォントサイズ指定の組み合わせ（fontSizeが優先）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'fontSize優先',
					level: 2,
					fontSize: 'large',
					customFontSize: '3em',
					responsiveFontSize: {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	// レスポンシブフォントサイズ部分指定のテスト
	it( '015: レスポンシブフォントサイズ（desktopのみ）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'デスクトップのみ',
					level: 2,
					responsiveFontSize: {
						desktop: '2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '016: レスポンシブフォントサイズ（tabletのみ）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'タブレットのみ',
					level: 2,
					responsiveFontSize: {
						tablet: '1.5rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '017: レスポンシブフォントサイズ（mobileのみ）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'モバイルのみ',
					level: 2,
					responsiveFontSize: {
						mobile: '1.2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '018: レスポンシブフォントサイズ（desktop + tablet）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'デスクトップ＋タブレット',
					level: 2,
					responsiveFontSize: {
						desktop: '2rem',
						tablet: '1.5rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '019: レスポンシブフォントサイズ（desktop + mobile）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'デスクトップ＋モバイル',
					level: 2,
					responsiveFontSize: {
						desktop: '2rem',
						mobile: '1.2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '020: レスポンシブフォントサイズ（tablet + mobile）', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'タブレット＋モバイル',
					level: 2,
					responsiveFontSize: {
						tablet: '1.5rem',
						mobile: '1.2rem',
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '021: 文字色追加(クラス)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字色class指定',
					level: 2,
					textColor: 'ys-blue',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '022: 文字色追加(カスタム)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字色カスタム指定',
					level: 2,
					customTextColor: '#ff0000',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '023: 文字太さ(400)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字太さ指定(400)',
					level: 2,
					fontWeight: '400',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '024: 文字太さ(700)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字太さ指定(700)',
					level: 2,
					fontWeight: '700',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '025: 文字スタイル(italic)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字スタイル指定(italic)',
					level: 2,
					fontStyle: 'italic',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '026: 文字スタイル(normal)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字スタイル指定(normal)',
					level: 2,
					fontStyle: 'normal',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );
} );
