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
} );
