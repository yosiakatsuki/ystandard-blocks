const { series, parallel, watch, src, dest } = require( 'gulp' );
const gulpSass = require( 'gulp-sass' );
const sassGlob = require( "gulp-sass-glob" );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const mqpacker = require( 'css-mqpacker' );
const cssdeclsort = require( 'css-declaration-sorter' );
const cssnano = require( 'cssnano' );
const gulpZip = require( 'gulp-zip' );
const del = require( 'del' );

const postcssPlugins = [
	autoprefixer( {
		grid: 'autoplace'
	} ),
	mqpacker(),
	cssnano( {
			preset: [
				'default',
				{ minifyFontValues: { removeQuotes: false } }
			]
		}
	),
	cssdeclsort( { order: 'smacss' } )
];

/**
 * sass
 */
function sass() {
	return src( './src/sass/*.scss' )
		.pipe( sassGlob() )
		.pipe( gulpSass() )
		.pipe( postcss( postcssPlugins ) )
		.pipe( dest( './css' ) );
}

function cleanFiles( cb ) {
	return del(
		[
			'./ystandard-blocks',
			'./build'
		],
		cb );
}

/**
 * 必要ファイルのコピー
 */
function copyProductionFiles() {
	return src(
		[
			'**',
			'!.gitignore',
			'!.travis.yml',
			'!node_modules',
			'!node_modules/**',
			'!gulpfile.js',
			'!package.json',
			'!package-lock.json',
			'!webpack.config.js',
			'!ystandard-blocks-webpack-config.js',
			'!ystandard-blocks.json',
			'!phpcs.ruleset.dist',
			'!phpcs.ruleset.xml',
			'!phpunit.xml.dist',
			'!tests',
			'!tests/**',
			'!bin',
			'!bin/**',
			'!src',
			'!src/**',
			'!blocks/**/*.js',
			'!blocks/**/*.scss',
			'!.github',
			'!.github/**',
			'!build',
			'!build/**',
			'!*.zip',
			'!ystandard-blocks',
			'!ystandard-blocks/**',
		],
		{ base: './' }
	)
		.pipe( dest( './ystandard-blocks' ) );
}

/**
 * Zip
 */
function zip() {
	return src( 'ystandard-blocks/**', { base: '.' } )
		.pipe( gulpZip( 'ystandard-blocks.zip' ) )
		.pipe( dest( 'build' ) );
}

function copyJson() {
	return src( 'ystandard-blocks.json' )
		.pipe( dest( 'build' ) );
}

function watchFiles() {
	cleanFiles();
	sass();
	watch( './src/sass/**/*.scss', sass );
	watch( './src/js/**/*.scss', sass );
	watch( './blocks/**/*.scss', sass );
}

/**
 * サーバーにデプロイするファイルを作成
 */

exports.createDeployFiles = series( cleanFiles, copyProductionFiles, parallel( zip, copyJson ) );
exports.watch = series( watchFiles );
exports.sass = series( sass );
exports.clean = series( cleanFiles );
/**
 * default
 */
exports.default = series( watchFiles );
