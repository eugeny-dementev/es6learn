var _ = require('lodash');
var fs = require('fs');
var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var babelConfig = {modules: 'common', optional: ['runtime'], stage: 0, loose: ['es6.modules']};

gulp.task('default', function() {
  return gulp.src(['src/**', '!src/overhead/**'])
    .pipe(babel(babelConfig))
    .pipe(gulp.dest('out'));
});

gulp.task('black', function() {
  var conf = {
    blacklist: [
      //'es6.blockScoping',
      'es6.arrowFunctions'
    ]
  };

  return gulp.src('src/presentation/forof_arrow.js')
    .pipe(babel(conf))
    .pipe(gulp.dest('out/presentation'));
});

gulp.task('forof', function() {
  var forofAllow = {
    blacklist: ['es6.forOf']
  };

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

gulp.task('browserify.es6', function() {
  return browserify('./src/overhead/es6/index.js')
    .transform(babelify.configure(babelConfig))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./out/overhead/es6'));
});

gulp.task('browserify.es5', function() {
  return browserify('./src/overhead/es5/index.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./out/overhead/es5'));
});

gulp.task('browserify', ['browserify.es6', 'browserify.es5']);
