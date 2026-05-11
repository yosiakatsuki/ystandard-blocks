/**
 * fixture HTML を bootstrap するためのテストファイル
 *
 * 通常の test:integration 実行時はスキップされる。
 * 環境変数 BOOTSTRAP_FIXTURES=y が指定されたときだけ実行され、
 * ystdb/card と ystdb/section の代表的な属性組合せから .html / .parsed.json /
 * .json / .serialized.html を生成して `tests/integration/fixtures/blocks/` 配下に
 * 書き出す。
 *
 * 一度生成されたフィクスチャは git 管理対象であり、回帰検出のベースラインとなる。
 * 再生成が必要になった場合は `BOOTSTRAP_FIXTURES=y npm run test:integration` を実行する。
 */
import { createBlock, parse, serialize } from '@wordpress/blocks';
import { parse as grammarParse } from '@wordpress/block-serialization-default-parser';

import {
	registerCardTestBlock,
	registerSectionTestBlock,
} from '../helpers/register-blocks';
import {
	writeBlockFixtureHTML,
	writeBlockFixtureJSON,
	writeBlockFixtureParsedJSON,
	writeBlockFixtureSerializedHTML,
} from '../fixtures';

registerCardTestBlock();
registerSectionTestBlock();

const SHOULD_BOOTSTRAP = process.env.BOOTSTRAP_FIXTURES === 'y';

const SPACER = '\t';

/**
 * fixture と比較するときに使うプロパティだけを取り出す
 */
const normalizeParsedBlocks = ( blocks ) =>
	blocks.map( ( block ) => ( {
		name: block.name,
		isValid: block.isValid,
		attributes: JSON.parse( JSON.stringify( block.attributes ) ),
		innerBlocks: normalizeParsedBlocks( block.innerBlocks ),
	} ) );

/**
 * fixture ケース定義
 *
 * @typedef {Object} FixtureCase
 * @property {string} basename     拡張子なしのフィクスチャ名（例: ystdb__card__vertical）
 * @property {string} blockName    ブロック名（例: ystdb/card）
 * @property {Object} attributes   block attributes
 * @property {Array}  [innerBlocks] innerBlocks の配列（[blockName, attributes] のタプル）
 */
const cases = [
	// --- card -----------------------------------------------------------
	{
		basename: 'ystdb__card',
		blockName: 'ystdb/card',
		attributes: {
			url: 'https://wp-ystandard.com/',
		},
	},
	{
		basename: 'ystdb__card__full-attributes',
		blockName: 'ystdb/card',
		attributes: {
			url: 'https://wp-ystandard.com/',
			linkTarget: '_blank',
			rel: 'noopener noreferrer',
			cardType: 'horizon',
			title: 'yStandard',
			showImage: true,
			imageSize: 'normal',
			imageType: 'fitText',
			imageAlign: 'left',
			imageURL: 'https://wp-ystandard.com/sample.jpg',
			imageAlt: 'sample',
			imageID: 123,
			showDscr: true,
			dscrCharCount: 80,
			dscr: 'シンプルでカスタマイズしやすい WordPress テーマ',
			showDomain: true,
			backgroundColor: 'primary',
			titleColor: 'primary',
			caption: 'おすすめテーマ',
		},
	},
	{
		basename: 'ystdb__card__vertical',
		blockName: 'ystdb/card',
		attributes: {
			url: 'https://wp-ystandard.com/',
			cardType: 'vertical',
			title: 'yStandard 縦型',
		},
	},
	{
		basename: 'ystdb__card__no-image',
		blockName: 'ystdb/card',
		attributes: {
			url: 'https://wp-ystandard.com/',
			showImage: false,
			title: '画像なしカード',
		},
	},

	// --- section --------------------------------------------------------
	{
		basename: 'ystdb__section',
		blockName: 'ystdb/section',
		attributes: {},
		innerBlocks: [],
	},
	{
		basename: 'ystdb__section__background-color',
		blockName: 'ystdb/section',
		attributes: {
			customBackgroundColor: '#f0f0f0',
			paddingTop: 120,
			paddingBottom: 120,
		},
		innerBlocks: [],
	},
	{
		basename: 'ystdb__section__background-image',
		blockName: 'ystdb/section',
		attributes: {
			backgroundType: 'image',
			backgroundImageURL: 'https://example.com/bg.jpg',
			backgroundImageID: 999,
			backgroundImageOpacity: 60,
			customBackgroundColor: '#000000',
			useCustomOverlaySize: false,
		},
		innerBlocks: [],
	},
	{
		basename: 'ystdb__section__divider',
		blockName: 'ystdb/section',
		attributes: {
			dividerTypeTop: 'wave',
			dividerLevelTop: 50,
			customDividerColorTop: '#ffffff',
			dividerTypeBottom: 'triangle',
			dividerLevelBottom: 30,
			customDividerColorBottom: '#cccccc',
		},
		innerBlocks: [],
	},
	{
		basename: 'ystdb__section__animation',
		blockName: 'ystdb/section',
		attributes: {
			animationType: 'fadein-up',
			animationSpeed: 1.5,
			animationDelay: 0.5,
		},
		innerBlocks: [],
	},
	{
		basename: 'ystdb__section__full-align',
		blockName: 'ystdb/section',
		attributes: {
			align: 'full',
			containerFluid: true,
			innerCustomWidth: 800,
		},
		innerBlocks: [],
	},
];

describe( 'bootstrap fixture files', () => {
	if ( ! SHOULD_BOOTSTRAP ) {
		it( 'BOOTSTRAP_FIXTURES=y が指定されていないのでスキップ', () => {
			expect( true ).toBe( true );
		} );
		return;
	}

	cases.forEach( ( testCase ) => {
		// eslint-disable-next-line jest/valid-title
		it( `bootstrap: ${ testCase.basename }`, () => {
			const innerBlocks = ( testCase.innerBlocks || [] ).map(
				( [ name, attributes ] ) => createBlock( name, attributes )
			);
			const block = createBlock(
				testCase.blockName,
				testCase.attributes,
				innerBlocks
			);

			const html = serialize( [ block ] ) + '\n';
			writeBlockFixtureHTML( testCase.basename, html );

			const parsed = grammarParse( html.trim() );
			writeBlockFixtureParsedJSON(
				testCase.basename,
				JSON.stringify( parsed, null, SPACER ) + '\n'
			);

			const blocks = parse( html.trim() );
			const normalized = normalizeParsedBlocks( blocks );
			writeBlockFixtureJSON(
				testCase.basename,
				JSON.stringify( normalized, null, SPACER ) + '\n'
			);

			const reSerialized = serialize( blocks ) + '\n';
			writeBlockFixtureSerializedHTML(
				testCase.basename,
				reSerialized
			);

			expect( normalized[ 0 ]?.isValid ).toBe( true );
		} );
	} );
} );
