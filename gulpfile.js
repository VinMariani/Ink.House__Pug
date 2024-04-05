let gulp = require('gulp'),
    pug = require('gulp-pug'); // конвертация паг в хтмл
// const cssnano = require('gulp-cssnano');
// const changed = require('gulp-changed'); // следит за изменениями
// const browsersync = require('browser-sync').create(); // перезагружает браузер
// const imagemin = require('gulp-imagemin'); // уменьшает размеры изображений
// const clean = require('gulp-clean'); // может удалять папки и файлы

// для конвертации файлов паг в хтмл
gulp.task('pug', function() {
    return gulp.src('dev/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('dev'))
});

// gulp.task('pug_2', function() {
//     return gulp.src('dev/layouts/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('dev/layouts/'))
// });

// для отслеживания изменений
gulp.task('watch', function(){
    gulp.watch('dev/layouts/*.pug', gulp.parallel('pug'));
});

gulp.task('watch_modules', function(){
    gulp.watch('dev/modules/*.pug', gulp.parallel('pug'));
});


// // для оптимизации (сжатия) картинок
// function img() {
//     return  src('./dev/src/images/*')
//         .pipe(imagemin())
//         .pipe(dest('./images/'));
// }

// для запуска скриптов
gulp.task('default', gulp.parallel('watch', 'watch_modules'));



// команда перезагрузки браузера
// .pipe(browsersync.stream());