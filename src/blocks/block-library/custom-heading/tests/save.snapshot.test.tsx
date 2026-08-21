import React from 'react';
import { render } from '@testing-library/react';
import Save from '../save';

const getFontSizeStyle = (
	fontSize?: string,
	responsiveFontSize?: {
		desktop?: string;
		tablet?: string;
		mobile?: string;
	}
) => ( {
	style: {
		...( fontSize
			? {
					typography: {
						fontSize,
					},
			  }
			: {} ),
		...( responsiveFontSize
			? {
					ystdb: {
						customHeading: {
							responsive: {
								main: {
									typography: {
										fontSize: responsiveFontSize,
									},
								},
							},
						},
					},
			  }
			: {} ),
	},
} );

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

	it( '004: プリセットフォントサイズの反映はBlock Supportsに任せる', () => {
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

	it( '005: 任意フォントサイズの反映はBlock Supportsに任せる', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'カスタムフォントサイズ指定',
					level: 2,
					...getFontSizeStyle( '2em' ),
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
					...getFontSizeStyle( undefined, {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					} ),
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
					style: {
						typography: {
							textAlign: 'center',
						},
					},
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
					style: {
						typography: {
							textAlign: 'right',
						},
					},
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
					fontSize: 'large',
					style: {
						typography: {
							textAlign: 'center',
						},
					},
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
					style: {
						...getFontSizeStyle( '2em', {
							desktop: '2rem',
							tablet: '1.5rem',
							mobile: '1.2rem',
						} ).style,
						typography: {
							fontSize: '2em',
							textAlign: 'center',
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	// 単一設定とレスポンシブ設定の組み合わせを確認.
	it( '012: プリセットと任意フォントサイズの組み合わせ', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'fontSize優先',
					level: 2,
					fontSize: 'large',
					...getFontSizeStyle( '3em' ),
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '013: プリセットとレスポンシブフォントサイズの組み合わせ', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'fontSize優先',
					level: 2,
					fontSize: 'large',
					...getFontSizeStyle( undefined, {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					} ),
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '014: プリセット、任意値、レスポンシブ値の組み合わせ', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'fontSize優先',
					level: 2,
					fontSize: 'large',
					...getFontSizeStyle( '3em', {
						desktop: '2rem',
						tablet: '1.5rem',
						mobile: '1.2rem',
					} ),
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
					...getFontSizeStyle( undefined, {
						desktop: '2rem',
					} ),
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
					...getFontSizeStyle( undefined, {
						tablet: '1.5rem',
					} ),
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
					...getFontSizeStyle( undefined, {
						mobile: '1.2rem',
					} ),
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
					...getFontSizeStyle( undefined, {
						desktop: '2rem',
						tablet: '1.5rem',
					} ),
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
					...getFontSizeStyle( undefined, {
						desktop: '2rem',
						mobile: '1.2rem',
					} ),
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
					...getFontSizeStyle( undefined, {
						tablet: '1.5rem',
						mobile: '1.2rem',
					} ),
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
					style: {
						color: {
							text: '#ff0000',
						},
					},
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
					style: {
						typography: {
							fontWeight: '400',
						},
					},
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
					style: {
						typography: {
							fontWeight: '700',
						},
					},
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
					style: {
						typography: {
							fontStyle: 'italic',
						},
					},
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
					style: {
						typography: {
							fontStyle: 'normal',
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '027: 文字間隔指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '文字間隔指定',
					level: 2,
					style: {
						typography: {
							letterSpacing: '0.1em',
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '028: 行の高さ指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '行の高さ指定',
					level: 2,
					style: {
						typography: {
							lineHeight: 1.8,
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '029: 行の高さ指定(0指定)', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '行の高さ指定(0指定)',
					level: 2,
					style: {
						typography: {
							lineHeight: 0,
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '030: フォントファミリー指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'フォントファミリー指定',
					level: 2,
					style: {
						typography: {
							fontFamily: 'Arial, sans-serif',
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '031: 外側余白と内側余白指定', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '余白指定',
					level: 2,
					style: {
						spacing: {
							margin: {
								top: '1rem',
								bottom: '2rem',
							},
							padding: {
								left: 'var:preset|spacing|40',
								right: '3rem',
							},
						},
						ystdb: {
							customHeading: {
								responsive: {
									main: {
										spacing: {
											margin: {
												desktop: {
													top: '4rem',
												},
											},
											padding: {
												mobile: {
													bottom: '5rem',
												},
											},
										},
									},
								},
							},
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '032: サブテキストあり', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'メインテキスト',
					level: 2,
					hasSubText: true,
					subText: 'サブテキスト',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '033: サブテキスト設定を無効にした場合は見出し単体を維持する', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'メインテキスト',
					level: 3,
					hasSubText: false,
					subText: '保持されるサブテキスト',
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '034: サブテキストありでもBlock Supportsを見出しへ適用する', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'メインテキスト',
					level: 2,
					hasSubText: true,
					subText: 'サブテキスト',
					fontSize: 'large',
					textColor: 'ys-blue',
					style: {
						spacing: {
							margin: {
								top: '1rem',
							},
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '035: リンク色を見出しへ適用する', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'リンクを含む見出し',
					level: 2,
					style: {
						elements: {
							link: {
								color: {
									text: 'var:preset|color|ys-blue',
								},
							},
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '036: メインテキストへ枠線と角丸を適用する', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: '枠線付き見出し',
					level: 2,
					style: {
						border: {
							color: '#111111',
							radius: '8px',
							style: 'solid',
							width: '1px',
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '037: サブテキストと見出しグループへ独自スタイルを適用する', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'メインテキスト',
					level: 2,
					hasSubText: true,
					subText: 'サブテキスト',
					style: {
						ystdb: {
							customHeading: {
								sub: {
									typography: {
										fontSize: 'var:preset|font-size|small',
										fontWeight: '700',
									},
									color: { text: '#333333' },
									border: {
										color: '#cccccc',
										radius: '4px',
										style: 'solid',
										width: '1px',
									},
									spacing: {
										padding: {
											left: '1rem',
											right: '1rem',
										},
									},
								},
								group: {
									color: {
										background: '#f7f7f7',
									},
									border: { radius: '12px' },
									spacing: {
										margin: { top: '2rem', bottom: '2rem' },
										padding: {
											top: '1rem',
											bottom: '1rem',
										},
									},
								},
							},
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );

	it( '038: 見出しグループを横並びにしてブロック間隔を適用する', () => {
		const { asFragment } = render(
			<Save
				attributes={ {
					content: 'メインテキスト',
					level: 2,
					hasSubText: true,
					subText: 'サブテキスト',
					style: {
						ystdb: {
							customHeading: {
								group: {
									layout: {
										orientation: 'horizontal',
									},
									spacing: {
										blockGap: 'var:preset|spacing|40',
									},
								},
							},
						},
					},
				} }
			/>
		);
		expect( asFragment() ).toMatchSnapshot();
	} );
} );
