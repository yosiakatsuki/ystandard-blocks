/**
 * https://github.com/WordPress/gutenberg/blob/trunk/test/integration/fixtures/utils.js
 * を参考にした fixture 読み書きユーティリティ。
 *
 * fixture はブロックごとにサブディレクトリ分割して格納する。
 * 例: tests/integration/fixtures/blocks/card/ystdb__card.html
 *
 * basename の prefix（`ystdb__{block}__` または `ystdb__{block}`）からサブディレクトリ名を自動算出する。
 */
import fs from 'fs';
import path from 'path';

const FIXTURES_DIR = path.join( __dirname, 'blocks' );

const uniq = ( values ) => Array.from( new Set( values ) );

/**
 * basename から格納先のブロックディレクトリ名を算出する。
 *
 * `ystdb__{block}__...` または `ystdb__{block}` の `{block}` 部分を
 * そのままディレクトリ名として返す。
 *
 * @param {string} basename fixture の拡張子なしファイル名
 * @return {string|null} ブロックディレクトリ名（該当なしは null）
 */
function getBlockDirFromBasename( basename ) {
	const match = basename.match( /^ystdb__([a-z0-9-]+)(?:__|$)/ );
	return match ? match[ 1 ] : null;
}

function readFixtureFile( basename, ext ) {
	const dir = getBlockDirFromBasename( basename );
	if ( ! dir ) {
		return null;
	}
	try {
		return fs.readFileSync(
			path.join( FIXTURES_DIR, dir, `${ basename }.${ ext }` ),
			'utf8'
		);
	} catch ( err ) {
		return null;
	}
}

function writeFixtureFile( basename, ext, content ) {
	const dir = getBlockDirFromBasename( basename );
	if ( ! dir ) {
		throw new Error(
			`basename からブロックディレクトリを判定できません: ${ basename }`
		);
	}
	const blockDir = path.join( FIXTURES_DIR, dir );
	if ( ! fs.existsSync( blockDir ) ) {
		fs.mkdirSync( blockDir, { recursive: true } );
	}
	fs.writeFileSync( path.join( blockDir, `${ basename }.${ ext }` ), content );
}

export function blockNameToFixtureBasename( blockName ) {
	return blockName.replace( /\//g, '__' );
}

export function getAvailableBlockFixturesBasenames() {
	if ( ! fs.existsSync( FIXTURES_DIR ) ) {
		return [];
	}
	// サブディレクトリ（ブロックごと）配下の .html / .json を再帰的に走査する。
	const basenames = [];
	const subdirs = fs
		.readdirSync( FIXTURES_DIR, { withFileTypes: true } )
		.filter( ( entry ) => entry.isDirectory() )
		.map( ( entry ) => entry.name );
	for ( const subdir of subdirs ) {
		const files = fs
			.readdirSync( path.join( FIXTURES_DIR, subdir ) )
			.filter( ( f ) => /(\.html|\.json)$/.test( f ) )
			.map( ( f ) => f.replace( /\..+$/, '' ) );
		basenames.push( ...files );
	}
	return uniq( basenames );
}

export function getBlockFixtureHTML( basename ) {
	const filename = `${ basename }.html`;
	const fileContents = readFixtureFile( basename, 'html' );
	return {
		filename,
		file: fileContents ? fileContents.trim() : null,
	};
}

export function getBlockFixtureJSON( basename ) {
	const filename = `${ basename }.json`;
	return {
		filename,
		file: readFixtureFile( basename, 'json' ),
	};
}

export function getBlockFixtureParsedJSON( basename ) {
	const filename = `${ basename }.parsed.json`;
	return {
		filename,
		file: readFixtureFile( basename, 'parsed.json' ),
	};
}

export function getBlockFixtureSerializedHTML( basename ) {
	const filename = `${ basename }.serialized.html`;
	return {
		filename,
		file: readFixtureFile( basename, 'serialized.html' ),
	};
}

export function writeBlockFixtureHTML( basename, fixture ) {
	writeFixtureFile( basename, 'html', fixture );
}

export function writeBlockFixtureJSON( basename, fixture ) {
	writeFixtureFile( basename, 'json', fixture );
}

export function writeBlockFixtureParsedJSON( basename, fixture ) {
	writeFixtureFile( basename, 'parsed.json', fixture );
}

export function writeBlockFixtureSerializedHTML( basename, fixture ) {
	writeFixtureFile( basename, 'serialized.html', fixture );
}
