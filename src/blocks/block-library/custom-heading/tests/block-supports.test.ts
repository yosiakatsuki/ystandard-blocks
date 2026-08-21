import metadata from '../block.json';

describe( 'Custom Heading Block Supports', () => {
	it( 'コア見出しと同じタイポグラフィ設定を有効にする', () => {
		expect( metadata.supports.typography ).toEqual( {
			fontSize: true,
			lineHeight: true,
			textAlign: true,
			__experimentalFontFamily: true,
			__experimentalFontStyle: true,
			__experimentalFontWeight: true,
			__experimentalLetterSpacing: true,
			__experimentalTextTransform: true,
			__experimentalTextDecoration: true,
			__experimentalWritingMode: true,
			fitText: true,
			__experimentalDefaultControls: {
				fontSize: true,
			},
		} );
	} );

	it( 'コア見出しと同じ色設定を有効にする', () => {
		expect( metadata.supports.color ).toEqual( {
			gradients: true,
			link: true,
			__experimentalDefaultControls: {
				background: true,
				text: true,
			},
		} );
	} );
} );
