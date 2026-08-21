import { getInnerBlockSupportProps } from '../index';

describe( 'getInnerBlockSupportProps', () => {
	it( 'タイポグラフィ、色、余白を一つのpropsへまとめる', () => {
		expect(
			getInnerBlockSupportProps( {
				fontSize: 'large',
				textColor: 'ys-blue',
				style: {
					typography: {
						fontWeight: '700',
						textAlign: 'center',
					},
					spacing: {
						margin: {
							top: '1rem',
						},
					},
				},
			} )
		).toEqual( {
			className:
				'has-text-align-center has-large-font-size has-ys-blue-color has-text-color',
			style: {
				fontWeight: '700',
				marginTop: '1rem',
			},
		} );
	} );

	it( 'リンク色を見出し要素用のCSS変数へ変換する', () => {
		const props = getInnerBlockSupportProps( {
			style: {
				elements: {
					link: {
						color: {
							text: 'var:preset|color|ys-blue',
						},
					},
				},
			},
		} );

		expect( props.className ).toBe( 'has-link-color' );
		expect( props.style ).toEqual( {
			'--wp--style--color--link': 'var(--wp--preset--color--ys-blue)',
		} );
	} );
} );
