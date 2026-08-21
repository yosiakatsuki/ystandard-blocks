import {
	createBlock,
	getBlockAttributes,
	getBlockType,
	getSaveContent,
	parse,
	serialize,
	serializeRawBlock,
} from '@wordpress/blocks';
import { RichTextData } from '@wordpress/rich-text';

import metadata from '../../../src/blocks/block-library/custom-heading/block.json';
import { registerCustomHeadingTestBlock } from '../helpers/register-blocks';

registerCustomHeadingTestBlock();

describe( 'ystdb/custom-headingの保存互換性', () => {
	it( 'サブテキストとBlock Supportsを保存後に再読み込みできる', () => {
		const content = serialize( [
			createBlock( metadata.name, {
				content: RichTextData.fromPlainText( 'メインテキスト' ),
				level: 2,
				hasSubText: true,
				subText: RichTextData.fromPlainText( 'サブテキスト' ),
				fontSize: 'large',
				style: {
					spacing: {
						margin: { top: '1rem' },
					},
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
			} ),
		] );
		const [ block ] = parse( content );

		expect( block.isValid ).toBe( true );
		expect( block.attributes.subText.toHTMLString() ).toBe(
			'サブテキスト'
		);
		expect( block.attributes.style.ystdb.customHeading.group ).toEqual( {
			layout: { orientation: 'horizontal' },
			spacing: { blockGap: 'var:preset|spacing|40' },
		} );
		expect( serialize( [ block ] ) ).toBe( content );
	} );

	it( 'v3.25.3の保存形式を最新形式へ移行する', () => {
		const blockType = getBlockType( metadata.name );
		const legacyBlockType = {
			...blockType,
			...blockType.deprecated[ 0 ],
		};
		const legacyAttributes = {
			content: RichTextData.fromPlainText( 'メインテキスト' ),
			level: 2,
			customFontSize: '2rem',
			responsiveMargin: {
				desktop: { top: '3rem' },
			},
			clearStyle: true,
		};
		const legacyContent = getSaveContent(
			legacyBlockType,
			legacyAttributes
		);
		const commentAttributes = {
			level: 2,
			customFontSize: '2rem',
			responsiveMargin: {
				desktop: { top: '3rem' },
			},
		};
		const parsedLegacyAttributes = getBlockAttributes(
			legacyBlockType,
			legacyContent,
			commentAttributes
		);

		expect(
			getSaveContent( legacyBlockType, parsedLegacyAttributes )
		).toBe( legacyContent );

		const postContent = serializeRawBlock( {
			blockName: metadata.name,
			attrs: commentAttributes,
			innerBlocks: [],
			innerContent: [ legacyContent ],
		} );
		const [ block ] = parse( postContent, {
			__unstableSkipMigrationLogs: true,
		} );

		expect( block.isValid ).toBe( true );
		expect( block.attributes.style.typography.fontSize ).toBe( '2rem' );
		expect( block.attributes.style.ystdb.customHeading.responsive ).toEqual(
			{
				main: {
					spacing: {
						margin: {
							desktop: { top: '3rem' },
						},
					},
				},
			}
		);
		expect( parse( serialize( [ block ] ) )[ 0 ].isValid ).toBe( true );
	} );
} );
