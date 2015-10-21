$(document).ready(function(){

function (hello)

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['compress-js', 'compress-css'])
});

gulp.task('default', ['compress-css', 'compress-js']);