const { series, parallel, watch, src, dest } = require( 'gulp' );
const gulpSass = require( 'gulp-sass' );
const sassGlob = require( "gulp-sass-glob" );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const mqpacker = require( 'css-mqpacker' );
const cssnano = require( 'cssnano' );
const gulpZip = require( 'gulp-zip' );

const postcssPlugins = [
	autoprefixer( { overrideBrowserslist: [ 'last 2 version, not ie < 11' ] } ),
	mqpacker(),
	cssnano()
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
			'!block/**/*.js',
			'!block/**/*.scss',
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
	sass();
	watch( './src/sass/**/*.scss', sass );
	watch( './block/**/*.scss', sass );
}

/**
 * サーバーにデプロイするファイルを作成
 */

exports.createDeployFiles = series( copyProductionFiles, parallel( zip, copyJson ) );
exports.watch = series( watchFiles );
/**
 * default
 */
exports.default = series( watchFiles );
