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
} );
