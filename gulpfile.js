const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

// const webpackConfigApp = require("./ystandard-blocks-app-webpack.config.js");


const postcssPlugins = [
    autoprefixer({overrideBrowserslist: ['last 2 version, not ie < 11']}),
    mqpacker(),
    cssnano()
];

/**
 * sass
 */
gulp.task('sass', () => {
    return gulp.src('./src/sass/*.scss')
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest('./css'));
});

//
// gulp.task('js:block-app', () => {
// 	return webpackStream(webpackConfigApp, webpack)
// 		.pipe(gulp.dest('./js'));
// });

/**
 * watch
 */
gulp.task('watch', () => {
    gulp.watch('./src/sass/**/*.scss', gulp.task('sass'));
    gulp.watch('./block/**/*.scss', gulp.task('sass'));
    // gulp.watch('./block/**/app*.js', gulp.task('js:block-app'));
});

/**
 * default
 */
gulp.task('default', gulp.task('watch'));
