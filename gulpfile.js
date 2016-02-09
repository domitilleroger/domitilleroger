var gulp = require('gulp');

var browserSync = require('browser-sync');
var jade = require('gulp-jade');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
 
 
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app/build/'
    },
  })
});

gulp.task('jade', function() {
  return gulp.src('app/src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('app/build/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass', function(){
	return gulp.src('app/src/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/build/styles/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['sass', 'jade', 'browserSync'], function (){
  gulp.watch('app/src/scss/**/*.scss', ['sass']);
  gulp.watch('app/src/**/*.jade', ['jade']);
});