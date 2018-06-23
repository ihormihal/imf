'use strict';

const gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  concatCss = require('gulp-concat-css'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglifyjs'),
  autoprefixer = require('gulp-autoprefixer'),
  fs = require('fs');

const config = require('./config.json');

const vendorJs = [
  './bower_components/jquery/dist/jquery.slim.min.js',
  './bower_components/fancybox/dist/jquery.fancybox.min.js',
  './bower_components/owl.carousel/dist/owl.carousel.min.js',
  './bower_components/air-datepicker/dist/js/datepicker.min.js'
];
const vendorFonts = [
  './bower_components/mdi/fonts/materialdesignicons-webfont.woff',
  './bower_components/mdi/fonts/materialdesignicons-webfont.woff2',
  './bower_components/mdi/fonts/materialdesignicons-webfont.ttf'
];
const vendorCss = [
  './bower_components/mdi/css/materialdesignicons.min.css',
  './bower_components/fancybox/dist/jquery.fancybox.min.css',
  './bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
  './bower_components/air-datepicker/dist/css/datepicker.min.js'
];

const plugins = [
	'src/js/jquery-plugins/imf.gmap.js',
  'src/js/jquery-plugins/imf.header.js',
	'src/js/jquery-plugins/imf.owl.js',
	'src/js/jquery-plugins/imf.parallax.js',
	'src/js/jquery-plugins/imf.ripple.js',
	'src/js/jquery-plugins/imf.select.js'
];


const createPaths = () => {
  if (!fs.existsSync("./dist/")) fs.mkdirSync("./dist/");
  if (!fs.existsSync("./dist/js")) fs.mkdirSync("./dist/js");
}

gulp.task('bower', () => {
  gulp.src(vendorJs)
  .pipe(concat('vendor.min.js'))
  .pipe(gulp.dest('dist/js'));

  gulp.src(vendorFonts)
  .pipe(gulp.dest('dist/fonts'));

  gulp.src(vendorCss)
    .pipe(concatCss("vendor.min.css"))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scss', () => {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact',sourceMap: true}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10'],
    }))
    .pipe(concatCss("style.min.css"))
    .pipe(cleanCSS({compatibility: 'ie10'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('config', () => {
  createPaths()
  fs.writeFile("./dist/js/config.js", `var CONFIG = ${JSON.stringify(config)};`, (err) => {
    if (err) return console.log(err);
  });
});

gulp.task('img', () => {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('plugins', function() {
	return gulp.src(plugins)
	.pipe(concat('plugins.min.js'))
	.pipe(uglify(''))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', function() {
  return gulp.src(['src/js/main.js', 'src/js/jquery-components/*.js'])
  .pipe(sourcemaps.init())
	.pipe(concat('scripts.min.js'))
	.pipe(uglify(''))
  .pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/img/**/*', ['img']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('src/js/jquery-plugins/*', ['plugins']);
  gulp.watch(['src/js/main.js', 'src/js/jquery-components/*.js'], ['scripts']);
  gulp.watch('config.json', ['config']);
});

gulp.task('build', ['bower', 'config', 'scss', 'img', 'fonts', 'plugins', 'scripts']);
