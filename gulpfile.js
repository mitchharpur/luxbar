var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('scss/luxbar.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'docs',
            routes: {
                '/css': 'css'
            }
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('scss/**/*.scss', ['sass']); 
    gulp.watch('docs/*.html', browserSync.reload);
    gulp.watch('docs/*.css', browserSync.reload);
});

