import metadata from '../block.json';

describe( 'Custom Heading Block Supports', () => {
	it( 'サブテキストをコンテンツとして扱う', () => {
		expect( metadata.attributes.subText.role ).toBe( 'content' );
		expect( metadata.attributes.subText.selector ).toBe(
			'.ystdb-custom-heading-sub'
		);
	} );

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
			__experimentalSkipSerialization: true,
			__experimentalDefaultControls: {
				fontSize: true,
			},
		} );
	} );

	it( 'コア見出しと同じ色設定を有効にする', () => {
		expect( metadata.supports.color ).toEqual( {
			gradients: true,
			link: true,
			__experimentalSkipSerialization: true,
			__experimentalDefaultControls: {
				background: false,
				text: true,
			},
		} );
	} );

	it( 'コア見出しと同じ余白設定を有効にする', () => {
		expect( metadata.supports.spacing ).toEqual( {
			margin: [ 'top', 'bottom' ],
			padding: true,
			__experimentalSkipSerialization: true,
			__experimentalDefaultControls: {
				margin: false,
				padding: false,
			},
		} );
	} );

	it( 'メインテキストの枠線と角丸を有効にする', () => {
		expect( metadata.supports.__experimentalBorder ).toEqual( {
			color: true,
			radius: true,
			style: true,
			width: true,
			__experimentalSkipSerialization: true,
			__experimentalDefaultControls: {
				color: false,
				radius: false,
				style: false,
				width: false,
			},
		} );
	} );

	it( 'テキストを合わせる設定を無効にする', () => {
		expect( metadata.supports.typography ).not.toHaveProperty( 'fitText' );
	} );
} );
