var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {

  console.log('gulp task');

});

gulp.task('html', function() {

  console.log('Useful HTML task');

});

gulp.task('styles', function() {

  console.log('Imagine SASS or post CSS tasks running here');

});

gulp.task('watch', function() {

  watch('./app/index.html', function() {

    gulp.start('html');

  });

  watch('./app/assets/styles/**/*.css', function() {

    gulp.start('styles');

  });

});
