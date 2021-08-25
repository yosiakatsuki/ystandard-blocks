const { series, parallel, watch, src, dest } = require( 'gulp' );
const gulpSass = require( 'gulp-sass' )( require( 'sass' ) );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const cssdeclsort = require( 'css-declaration-sorter' );
const cssnano = require( 'cssnano' );
const gulpZip = require( 'gulp-zip' );
const del = require( 'del' );
const webpackStream = require( 'webpack-stream' );
const webpack = require( 'webpack' );
const rename = require( 'gulp-rename' );

const webpackConfig = require( './webpack.menu.config.js' );

const postcssPlugins = [
	autoprefixer( {
		grid: 'autoplace'
	} ),
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
		.pipe( gulpSass() )
		.pipe( postcss( postcssPlugins ) )
		.pipe( dest( './css' ) );
}

function buildWebpack() {
	return webpackStream( webpackConfig, webpack )
		.pipe( dest( 'js/' ) )
}

function cleanFiles( cb ) {
	return del(
		[
			'./ystandard-blocks',
			'./build'
		],
		cb );
}

function cleanTemp( cb ) {
	return del(
		[
			'./ystandard-blocks',
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
			'!ystandard-blocks-beta.json',
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

function copyUpdateJson() {
	return src( 'ystandard-blocks.json' )
		.pipe( dest( 'build' ) );
}

function copyUpdateJsonBeta() {
	return src( 'ystandard-blocks-beta.json' )
		.pipe( rename( 'ystandard-blocks.json' ) )
		.pipe( dest( 'build' ) );
}


function watchFiles() {
	cleanFiles();
	sass();
	buildWebpack();
	watch( './src/sass/**/*.scss', sass );
	watch( './src/js/**/*.scss', sass );
	watch( './blocks/**/*.scss', sass );
	watch( [ './src/js/admin/**/*.js' ], buildWebpack );
}

function watchSass() {
	watch( './src/sass/**/*.scss', sass );
	watch( './src/js/**/*.scss', sass );
	watch( './blocks/**/*.scss', sass );
}

/**
 * サーバーにデプロイするファイルを作成
 */
exports.createDeployFiles = series( cleanFiles, copyProductionFiles, parallel( zip, copyUpdateJson ), cleanTemp );
exports.createDeployFilesBeta = series( cleanFiles, copyProductionFiles, parallel( zip, copyUpdateJsonBeta ), cleanTemp );

exports.watch = series( watchFiles );
exports.watchSass = series( watchSass );
exports.sass = series( sass );
exports.clean = series( cleanFiles );
exports.webpack = series( buildWebpack );
/**
 * default
 */
exports.default = series( watchFiles );
