'use strict';
//var lr = require('tiny-lr');
const gulp  = require('gulp'),
	//livereload= require('gulp-livereload'),
	sass      = require('gulp-sass'),
	rename    = require('gulp-rename'),
	concat    = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	minifycss = require('gulp-minify-css'),
	uglify    = require('gulp-uglifyjs'),
	autoprefixer = require('gulp-autoprefixer');


const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');


/**** CONFIG ****/
const srcDir  = 'design/source/';
const vendorDir  = 'design/source/vendor/';
const distDir = 'design/';


const framework_libs = [
	//'fileinput',
	'im-gmap',
	'im-parallax',
	'im-owl',
	'imf.select',
	'imf.dropdown',
	//'im-header',
];
const vendor_libs = [
	'jquery',
	//'code',
	'fancybox',
	'owl2',
	//'spin',
	//'toastr',
	//'wow',
	//'sektor'
];
/**** END CONFIG ****/



gulp.task('vendorCss', function () {
	var sources = vendor_libs.map(function(dirName){ return vendorDir+dirName+'/*.css'; });
	return gulp.src(sources)
	.pipe(concatCss("vendor.css"))
	.pipe(minifycss(''))
	.pipe(rename("vendor.min.css"))
	.pipe(gulp.dest(distDir+'css'));
});

gulp.task('vendorJs', function() {
	var sources = vendor_libs.map(function(dirName){ return vendorDir+dirName+'/*.js'; });
	return gulp.src(sources)
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest(distDir+'js'));
});

gulp.task('frameworkJs', function() {
	var sources = framework_libs.map(function(fileName){ return srcDir+'libs/'+fileName+'.js'; });
	return gulp.src(sources)
	.pipe(concat('imf.min.js'))
	.pipe(uglify(''))
	.pipe(gulp.dest(distDir+'js'));
});

gulp.task('scripts', function() {
	return gulp.src(srcDir+'js/*.js')
	.pipe(concat('scripts.min.js'))
	.pipe(uglify(''))
	.pipe(gulp.dest(distDir+'js'));
});


gulp.task('vendor', ['vendorCss','vendorJs']);

gulp.task('sass', function () {
	gulp.src(srcDir+'sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concatCss("style.css"))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		}))
		.pipe(minifycss(''))
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest(distDir+'css'));
});


gulp.task('watch', function () {
	gulp.watch(srcDir+'sass/**/*.scss', ['sass']);
	gulp.watch(srcDir+'js/*.js', ['scripts']);
	gulp.watch(srcDir+'libs/*.js', ['frameworkJs']);
	gulp.watch('./design/app_react/**/*.jsx', ['build']); //react
});

gulp.task('default', ['vendorCss','vendorJs','frameworkJs','scripts','sass']);
