const { series, parallel, watch, src, dest } = require( 'gulp' );
const gulpSass = require( 'gulp-sass' )( require( 'sass' ) );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const cssdeclsort = require( 'css-declaration-sorter' );
const cssnano = require( 'cssnano' );
const gulpZip = require( 'gulp-zip' );
const del = require( 'del' );
const rename = require( 'gulp-rename' );

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
			'!webpack.blocks.config.js',
			'!webpack.admin-menu.config.js',
			'!webpack.admin-menu.config.dev.js',
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

function copyAdminMenuFiles() {
	return src(
		[
			'./src/js/admin-menu/inline-style/schema.json',
		],
		{ base: './src/js/admin-menu' }
	).pipe( dest( './assets/admin-menu' ) )
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
	// watch.
	watchSass();
}

function watchSass() {
	sass();
	watch( './src/sass/**/*.scss', sass );
	watch( './src/js/**/*.scss', sass );
	watch( './blocks/**/*.scss', sass );
}

function watchAdminMenu() {
	copyAdminMenuFiles();
	watch( './src/js/admin-menu/**/*.js', copyAdminMenuFiles );
	watch( './src/js/admin-menu/**/*.json', copyAdminMenuFiles );
}

/**
 * サーバーにデプロイするファイルを作成
 */
exports.createDeployFiles = series( cleanFiles, copyProductionFiles, parallel( zip, copyUpdateJson ), cleanTemp );
exports.createDeployFilesBeta = series( cleanFiles, copyProductionFiles, parallel( zip, copyUpdateJsonBeta ), cleanTemp );

exports.watch = series( watchFiles );
exports.watchSass = series( watchSass );
exports.watchAdminMenu = series( watchAdminMenu );
exports.sass = series( sass );
exports.clean = series( cleanFiles );
exports.copyAdminMenuFiles = series( copyAdminMenuFiles );
/**
 * default
 */
exports.default = series( watchFiles );
