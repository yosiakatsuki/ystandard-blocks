import React from 'react';
import { render } from '@testing-library/react';
import Save from '../save';

// スナップショットテスト
describe( 'Custom Heading Block <Save /> snapshot', () => {
	it( 'matches snapshot with minimal attributes', () => {
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

	it( 'matches snapshot with level 1', () => {
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

	it( 'matches snapshot with level 3', () => {
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

	it( 'matches snapshot with font size', () => {
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

	it( 'matches snapshot with custom font size', () => {
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

	it( 'matches snapshot with responsive font size', () => {
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

	it( 'matches snapshot with text align center', () => {
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

	it( 'matches snapshot with text align right', () => {
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

	it( 'matches snapshot with clearStyle true', () => {
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

	it( 'matches snapshot with all attributes combined', () => {
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

	it( 'matches snapshot with custom font size and responsive font size', () => {
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
