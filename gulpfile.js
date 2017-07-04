var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');

var options = {
  report: 'min',
  mangle: false
};

gulp.task('clean', function () {
  return gulp.src('dist/')
    .pipe(clean());
});

gulp.task('jshint', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify-lib', function () {
  return es.merge([
    gulp.src([
      'public/bower_components/jquery/dist/jquery.min.js',
      'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-route/angular-route.min.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ])
      .pipe(concat('libs.min.js')).pipe(uglify())
  ])
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('uglify-script', function () {
  return es.merge([
    gulp.src(['public/js/main.js',
      'public/js/config-value.js',
      'public/js/services/listfilme-service.js',
      'public/js/services/shared-properties.js',
      'public/js/controllers/filmes-controller.js',
      'public/js/controllers/filmeDetalhe-controller.js',
      'public/js/controllers/favoritos-controller.js'
    ])
      .pipe(concat('scripts.min.js'))
  ])
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('htmlmin', function () {
  return gulp.src('public/partials/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/partials'))
});

gulp.task('cssmin', function () {
  return gulp.src(['public/bower_components/bootstrap/dist/css/bootstrap.css', 'public/css/**/*.css'])
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function () {
  return gulp.src('public/index-prod.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-img', function () {
  return gulp.src('public/img/*')
    .pipe(gulp.dest('dist/img'));
});

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('public/js/**/*.js', browserSync.reload);
  gulp.watch('public/css/**/*.css', browserSync.reload);
  gulp.watch('public/**/*.html', browserSync.reload);

});

gulp.task('serve', serve('public'));
gulp.task('serve-build', serve('dist'));

gulp.task('default', ['watch']);
gulp.task('prod', function (cb) {
  return runSequence('clean', ['jshint', 'uglify-lib', 'uglify-script', 'htmlmin', 'cssmin', 'copy', 'copy-img'], cb)
});

// 