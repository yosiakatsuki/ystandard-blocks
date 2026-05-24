jest.mock( '@wordpress/blocks', () => ( {
	createBlock: ( name: string, attributes: Record< string, unknown > ) => ( {
		name,
		attributes,
	} ),
} ) );

import { transforms } from '../transform';

const getTransform = ( direction: 'from' | 'to', blockName: string ) => {
	return transforms[ direction ].find( ( transform ) =>
		transform.blocks.includes( blockName )
	);
};

describe( 'Custom Heading Block transforms', () => {
	it( 'core/headingのカスタムフォントサイズをcustomFontSizeへ変換する', () => {
		const transform = getTransform( 'from', 'core/heading' );
		const block = transform?.transform( {
			content: 'カスタムフォントサイズ',
			level: 2,
			style: {
				typography: {
					fontSize: '15px',
				},
			},
		} );

		expect( block?.attributes.customFontSize ).toBe( '15px' );
		expect( block?.attributes.fontSize ).toBeUndefined();
	} );

	it( 'core/paragraphのカスタムフォントサイズをcustomFontSizeへ変換する', () => {
		const transform = getTransform( 'from', 'core/paragraph' );
		const block = transform?.transform( {
			content: 'カスタムフォントサイズ',
			style: {
				typography: {
					fontSize: '15px',
				},
			},
		} );

		expect( block?.attributes.customFontSize ).toBe( '15px' );
		expect( block?.attributes.fontSize ).toBeUndefined();
	} );

	it( 'core/headingのフォントファミリーをcustom-headingへ変換する', () => {
		const transform = getTransform( 'from', 'core/heading' );
		const block = transform?.transform( {
			content: 'フォントファミリー',
			level: 2,
			fontFamily: 'Georgia, serif',
		} );

		expect( block?.attributes.fontFamily ).toBe( 'Georgia, serif' );
	} );

	it( 'core/headingの文字揃えをcustom-headingへ変換する', () => {
		const transform = getTransform( 'from', 'core/heading' );
		const block = transform?.transform( {
			content: '中央揃え',
			level: 2,
			style: {
				typography: {
					textAlign: 'center',
				},
			},
		} );

		expect( block?.attributes.textAlign ).toBe( 'center' );
	} );

	it( 'custom-headingのカスタムフォントサイズをcore/headingのstyleへ変換する', () => {
		const transform = getTransform( 'to', 'core/heading' );
		const block = transform?.transform( {
			content: 'カスタムフォントサイズ',
			level: 2,
			customFontSize: '15px',
		} );

		expect( block?.attributes.style ).toEqual( {
			typography: {
				fontSize: '15px',
			},
		} );
		expect( block?.attributes.customFontSize ).toBeUndefined();
	} );

	it( 'custom-headingのカスタムフォントサイズをcore/paragraphのstyleへ変換する', () => {
		const transform = getTransform( 'to', 'core/paragraph' );
		const block = transform?.transform( {
			content: 'カスタムフォントサイズ',
			customFontSize: '15px',
		} );

		expect( block?.attributes.style ).toEqual( {
			typography: {
				fontSize: '15px',
			},
		} );
		expect( block?.attributes.customFontSize ).toBeUndefined();
	} );

	it( 'custom-headingのフォントファミリーをcore/headingへ変換する', () => {
		const transform = getTransform( 'to', 'core/heading' );
		const block = transform?.transform( {
			content: 'フォントファミリー',
			level: 2,
			fontFamily: 'Georgia, serif',
		} );

		expect( block?.attributes.fontFamily ).toBe( 'Georgia, serif' );
	} );

	it( 'custom-headingの文字揃えをcore/headingのstyleへ変換する', () => {
		const transform = getTransform( 'to', 'core/heading' );
		const block = transform?.transform( {
			content: '中央揃え',
			level: 2,
			textAlign: 'center',
		} );

		expect( block?.attributes.style ).toEqual( {
			typography: {
				textAlign: 'center',
			},
		} );
		expect( block?.attributes.textAlign ).toBeUndefined();
	} );

	it( 'ystdb/headingのレスポンシブフォントサイズをpx付きで変換する', () => {
		const transform = getTransform( 'from', 'ystdb/heading' );
		const block = transform?.transform( {
			content: 'もとは旧見出しです',
			level: 2,
			useFontSizeResponsive: true,
			fontSizeMobile: 16,
			fontSizeTablet: 24,
			fontSizeDesktop: 32,
		} );

		expect( block?.attributes.responsiveFontSize ).toEqual( {
			mobile: '16px',
			tablet: '24px',
			desktop: '32px',
		} );
	} );

	it( 'ystdb/headingの文字間隔をem付きで変換する', () => {
		const transform = getTransform( 'from', 'ystdb/heading' );
		const block = transform?.transform( {
			content: 'もとは旧見出しです',
			level: 2,
			letterSpacing: 0.1,
		} );

		expect( block?.attributes.letterSpacing ).toBe( '0.1em' );
	} );
} );
