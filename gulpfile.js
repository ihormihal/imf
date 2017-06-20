'use strict';

const gulp  = require('gulp'),
	sass      = require('gulp-sass'),
	rename    = require('gulp-rename'),
	concat    = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	minifycss = require('gulp-minify-css'),
	uglify    = require('gulp-uglifyjs'),
	autoprefixer = require('gulp-autoprefixer');


/*** CONFIG ***/

const srcDir  = './design/source';
const vendorDir  = './design/vendor';
const destDir = './design';

const vendors = [
	'jquery',
	//'code',
	'fancybox',
	'owl2',
	'air-datepicker',
	//'spin',
	//'toastr',
	//'wow',
	//'sektor'
];
const plugins = [
	'imf.gmap',
	//'imf.header',
	'imf.owl',
	'imf.parallax',
	'imf.ripple',
	'imf.select'
];


/*** GULP TASKS ***/

//Vendor CSS
gulp.task('vendorCss', function() {
	var files = [];
	for (var i = 0; i < vendors.length; i++) {
		files.push(vendorDir+'/'+vendors[i]+'/*.css');
	}
	return gulp.src(files)
	.pipe(concatCss("vendor.css"))
	.pipe(minifycss(''))
	.pipe(rename("vendor.min.css"))
	.pipe(gulp.dest(destDir+'/css'));
});

//Vendor JS
gulp.task('vendorJs', function() {
	var files = [];
	for (var i = 0; i < vendors.length; i++) {
		files.push(vendorDir+'/'+vendors[i]+'/*.js');
	}
	return gulp.src(files)
	.pipe(concat('vendor.min.js'))
	.pipe(uglify(''))
	.pipe(gulp.dest(destDir+'/js'));
});

//combine to single task
gulp.task('vendor', ['vendorCss','vendorJs']);

//Framework jQuery plugins
gulp.task('plugins', function() {
	var files = [];
	for (var i = 0; i < plugins.length; i++) {
		files.push(srcDir+'/plugins/'+plugins[i]+'.js');
	}
	return gulp.src(files)
	.pipe(concat('plugins.min.js'))
	//.pipe(uglify(''))
	.pipe(gulp.dest(destDir+'/js'));
});

//Custom JS
gulp.task('scripts', function() {
	return gulp.src([srcDir+'/js/main.js', srcDir+'/js/components/*.js'])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify(''))
	.pipe(gulp.dest(destDir+'/js'));
});

//All CSS
gulp.task('sass', function () {
	return gulp.src(srcDir+'/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(concatCss("style.css"))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
	}))
	.pipe(minifycss(''))
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest(destDir+'/css'));
});

gulp.task('watch', function () {
	gulp.watch(srcDir+'/sass/**/*.scss', ['sass']);
	gulp.watch(srcDir+'/plugins/**/*.js', ['plugins']);
	gulp.watch(srcDir+'/js/**/*.js', ['scripts']);
});

gulp.task('default', ['vendorCss','vendorJs','plugins','scripts','sass']);
