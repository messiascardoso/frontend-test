var gulp = require('gulp');
var serve = require('gulp-serve');
 
gulp.task('serve', serve('public'));
gulp.task('serve-build', serve(['public', 'build']));

gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['serve'], function () {
   // Watch JavaScript
//   gulp.watch(['./public/js/**/*']);

  // Watch static files
  gulp.watch(['./public/**/*.*']);

});

