var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');

gulp.task('browserify', function () {
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpif(argv.prod, buffer()))
        .pipe(gulpif(argv.prod, uglify()))
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('copy', function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));

    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/assets'));

    gulp.src('src/data/**/*.*')
        .pipe(gulp.dest('dist/data'));
});



gulp.task('default', ['browserify', 'copy'], function () {
    return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
