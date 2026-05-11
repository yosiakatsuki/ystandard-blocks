/**
 * fixture-based block tests
 *
 * Gutenberg コア
 * https://github.com/WordPress/gutenberg/blob/trunk/test/integration/full-content/full-content.test.js
 * を参考にした、yStandard Blocks のブロック向け fixture-based test。
 *
 * tests/integration/fixtures/blocks/{block}/ 配下の以下のファイル群を 1 セットとして扱う:
 *   - {basename}.html              入力 HTML（投稿に保存された状態）
 *   - {basename}.parsed.json       parser の生出力
 *   - {basename}.json              parse 後 (migrate 適用後) のブロック構造
 *   - {basename}.serialized.html   再シリアライズ後の HTML
 *
 * deprecated 変換のテストは basename に `__deprecated-N` を含めることで判別する。
 *
 * 期待値ファイル (.parsed.json, .json, .serialized.html) が存在しない場合、
 * 環境変数 GENERATE_MISSING_FIXTURES=y で実行すると自動生成される。
 */
import { format } from 'util';

import { parse, serialize } from '@wordpress/blocks';
import { parse as grammarParse } from '@wordpress/block-serialization-default-parser';

import {
	getAvailableBlockFixturesBasenames,
	getBlockFixtureHTML,
	getBlockFixtureJSON,
	getBlockFixtureParsedJSON,
	getBlockFixtureSerializedHTML,
	writeBlockFixtureParsedJSON,
	writeBlockFixtureJSON,
	writeBlockFixtureSerializedHTML,
} from '../fixtures';

import {
	registerCardTestBlock,
	registerSectionTestBlock,
} from '../helpers/register-blocks';

registerCardTestBlock();
registerSectionTestBlock();

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

const blockBasenames = getAvailableBlockFixturesBasenames();

describe( 'full post content fixture', () => {
	const spacer = '\t';

	if ( blockBasenames.length === 0 ) {
		// fixture が 1 件もない場合でも describe ブロック内に最低 1 つテストが必要.
		it( 'fixture ファイルが存在しない場合はスキップ', () => {
			expect( true ).toBe( true );
		} );
		return;
	}

	blockBasenames.forEach( ( basename ) => {
		// eslint-disable-next-line jest/valid-title
		it( basename, () => {
			const { filename: htmlFixtureFileName, file: htmlFixtureContent } =
				getBlockFixtureHTML( basename );
			if ( htmlFixtureContent === null ) {
				throw new Error(
					`Missing fixture file: ${ htmlFixtureFileName }`
				);
			}

			// パーサーの生出力との比較.
			const {
				filename: parsedJSONFixtureFileName,
				file: parsedJSONFixtureContent,
			} = getBlockFixtureParsedJSON( basename );
			const parserOutputActual = grammarParse( htmlFixtureContent );
			let parserOutputExpectedString;
			if ( parsedJSONFixtureContent ) {
				parserOutputExpectedString = parsedJSONFixtureContent;
			} else if ( process.env.GENERATE_MISSING_FIXTURES ) {
				parserOutputExpectedString =
					JSON.stringify( parserOutputActual, null, spacer ) + '\n';
				writeBlockFixtureParsedJSON(
					basename,
					parserOutputExpectedString
				);
			} else {
				throw new Error(
					`Missing fixture file: ${ parsedJSONFixtureFileName }`
				);
			}

			const parserOutputExpected = JSON.parse(
				parserOutputExpectedString
			);
			try {
				expect( parserOutputActual ).toEqual( parserOutputExpected );
			} catch ( err ) {
				throw new Error(
					format(
						"File '%s' does not match expected value:\n\n%s",
						parsedJSONFixtureFileName,
						err.message
					)
				);
			}

			// parse → migrate 後のブロック構造との比較.
			const blocksActual = parse( htmlFixtureContent );

			// deprecated 変換時はバリデーション警告が出るためモックリセット.
			const isDeprecated = /__deprecated([-_]|$)/.test( basename );
			if ( isDeprecated ) {
				/* eslint-disable no-console */
				if ( typeof console.warn?.mockReset === 'function' ) {
					console.warn.mockReset();
				}
				if ( typeof console.error?.mockReset === 'function' ) {
					console.error.mockReset();
				}
				if ( typeof console.info?.mockReset === 'function' ) {
					console.info.mockReset();
				}
				/* eslint-enable no-console */
			}

			const blocksActualNormalized =
				normalizeParsedBlocks( blocksActual );
			const { filename: jsonFixtureFileName, file: jsonFixtureContent } =
				getBlockFixtureJSON( basename );

			let blocksExpectedString;
			if ( jsonFixtureContent ) {
				blocksExpectedString = jsonFixtureContent;
			} else if ( process.env.GENERATE_MISSING_FIXTURES ) {
				blocksExpectedString =
					JSON.stringify( blocksActualNormalized, null, spacer ) +
					'\n';
				writeBlockFixtureJSON( basename, blocksExpectedString );
			} else {
				throw new Error(
					`Missing fixture file: ${ jsonFixtureFileName }`
				);
			}

			const blocksExpected = JSON.parse( blocksExpectedString );
			try {
				expect( blocksActualNormalized ).toEqual( blocksExpected );
			} catch ( err ) {
				throw new Error(
					format(
						"File '%s' does not match expected value:\n\n%s",
						jsonFixtureFileName,
						err.message
					)
				);
			}

			// 再シリアライズ結果との比較.
			const serializedActual = serialize( blocksActual ) + '\n';
			const {
				filename: serializedHTMLFileName,
				file: serializedHTMLFixtureContent,
			} = getBlockFixtureSerializedHTML( basename );

			let serializedExpected;
			if ( serializedHTMLFixtureContent ) {
				serializedExpected = serializedHTMLFixtureContent;
			} else if ( process.env.GENERATE_MISSING_FIXTURES ) {
				serializedExpected = serializedActual;
				writeBlockFixtureSerializedHTML(
					basename,
					serializedExpected
				);
			} else {
				throw new Error(
					`Missing fixture file: ${ serializedHTMLFileName }`
				);
			}

			try {
				expect( serializedActual ).toEqual( serializedExpected );
			} catch ( err ) {
				throw new Error(
					format(
						"File '%s' does not match expected value:\n\n%s",
						serializedHTMLFileName,
						err.message
					)
				);
			}
		} );
	} );
} );
