var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync')


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('watch',['browser-sync'],function(){
	gulp.watch('public/js/**/*.js', browserSync.reload);
  gulp.watch('public/css/**/*.css', browserSync.reload);
  gulp.watch('public/**/*.html', browserSync.reload);
  
});

