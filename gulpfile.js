const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const sassGlob = require( "gulp-sass-glob" );
const postcss = require( 'gulp-postcss' );
const autoprefixer = require( 'autoprefixer' );
const mqpacker = require( 'css-mqpacker' );
const cssnano = require( 'cssnano' );
const zip = require( 'gulp-zip' );

const postcssPlugins = [
	autoprefixer( { overrideBrowserslist: [ 'last 2 version, not ie < 11' ] } ),
	mqpacker(),
	cssnano()
];

/**
 * sass
 */
gulp.task( 'sass', () => {
	return gulp.src( './src/sass/*.scss' )
		.pipe( sassGlob() )
		.pipe( sass() )
		.pipe( postcss( postcssPlugins ) )
		.pipe( gulp.dest( './css' ) );
} );

/**
 * Zip
 */
gulp.task( 'zip', function () {
	return gulp.src(
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
			'!*.zip',
		],
		{ base: './' }
	)
		.pipe( zip( 'ystandard-blocks.zip' ) )
		.pipe( gulp.dest( './build/' ) );
} );
/**
 * サーバーにデプロイするファイルを作成
 */
gulp.task( 'create-deploy-files', () => {
	gulp.task( 'zip' )();
	return gulp.src( './ystandard-blocks.json' )
		.pipe( gulp.dest( './build/' ) );
} );

/**
 * watch
 */
gulp.task( 'watch', () => {
	gulp.watch( './src/sass/**/*.scss', gulp.task( 'sass' ) );
	gulp.watch( './block/**/*.scss', gulp.task( 'sass' ) );
} );

/**
 * default
 */
gulp.task( 'default', gulp.task( 'watch' ) );
