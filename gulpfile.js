var _ = require('lodash'),
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel')

var babelConfig = {modules: 'common', optional: ['runtime'], stage: 0}

gulp.task('default', function() {
	return gulp.src('src/**')
		.pipe(babel(babelConfig))
		.pipe(gulp.dest('out'));
});

gulp.task('forof', function() {
  var forofAllow = {
    blacklist: ['es6.forOf']
  }

  return gulp.src('src/**')
    .pipe(babel(_.extend(babelConfig, forofAllow)))
		.pipe(gulp.dest('out'));
});

gulp.task('ugly6', function() {
  return gulp.src('uglycomp/**/*.es6.js')
    .pipe(babel(babelConfig))
    .pipe(uglify())
    .pipe(gulp.dest('uglyout'));
});

gulp.task('ugly5', function() {
  return gulp.src('uglycomp/**/*.es5.js')
    .pipe(uglify())
    .pipe(gulp.dest('uglyout'));
});

gulp.task('ugly', ['ugly5', 'ugly6']);
