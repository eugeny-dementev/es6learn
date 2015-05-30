var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('src/**')
		.pipe(babel({modules: 'common', optional: ['runtime'], stage: 0}))
		.pipe(gulp.dest('out'));
});
