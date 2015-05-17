var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('default', function() {
	return gulp.src('src/**')
		.pipe(babel({modules: 'common'}))
		.pipe(gulp.dest('out'));
});
