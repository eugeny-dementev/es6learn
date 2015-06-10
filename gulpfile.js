var _ = require('lodash'),
  gulp = require('gulp'),
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
