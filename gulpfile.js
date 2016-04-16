var gulp = require('gulp'),
   gutil = require('gulp-util');

//Create a basic taks to check if Gulp runs properly
gulp.task('check', function () {
   return gutil.log('Gulp is up and running!!!');
});
