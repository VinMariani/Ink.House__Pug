let gulp = require('gulp')
    pug = require('gulp-pug')

    
gulp.task('pug', function() {
    return gulp.src('dev/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dev'))
});

// gulp.task('pug_2', function() {
//     return gulp.src('dev/layouts/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('dev/layouts/'))
// });

gulp.task('watch', function(){
    gulp.watch('dev/layouts/*.pug', gulp.parallel('pug'));
});


gulp.task('watch_all', function(){
    gulp.watch('dev/*.pug', gulp.parallel('pug'));
});

gulp.task('default', gulp.parallel('watch', 'watch_all'));``