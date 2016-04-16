var gulp = require('gulp');
var gutil = require('gulp-util');
var fs = require('fs');
var taskListing = require('gulp-task-listing');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

//Create a basic taks to check if Gulp runs properly
gulp.task('check', function () {
   return gutil.log('Gulp is up and running!!!');
});

//get version of specific file
var getFile = function (fileName) {
   return JSON.parse(fs.readFileSync('./' + fileName, 'utf8'));
};

//Store all available path in Array
var path = {
   js: ['src/**/*.js', '.tmp/js/*.js', '!*spec.js'],
   spec: ['src/**/*.spec.js'],
   scss: ['src/**/*.scss'],
   html: ['src/**/*.html'],
   tmp: '.tmp',
   dist: 'dist',
   karmaConfig: __dirname + '/karma.config.js'
};

//List all Gulp Tasks
gulp.task('help', taskListing);

//Clean dist folder
gulp.task('clean:dist', function () {
   del.sync(path.dist);
});

//Clean .tmp folder
gulp.task('clean:tmp', function () {
   del.sync(path.tmp);
});

//Compile Sass file into CSS, and minify CSS into build directory
gulp.task('sass', function () {
   return gulp.src(path.scss)
      .pipe(sourcemaps.init())   //Sourcemaps for debugging in Dev
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest(path.dist));
});
