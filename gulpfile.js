const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');


gulp.task('server', function () {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('watch', function () {
    gulp.watch("dist/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    // gulp.watch("app/*.html").on('change', gulp.parallel('minifyHtml'));

});

gulp.task('styles', function () {
    return gulp.src("./dist/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// gulp.task('minifyHtml', () => {
//     return gulp.src('app/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist/'));
// });

// gulp.task('images', () => {
//     return gulp.src('app/img/**/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/img'));
// });

// gulp.task('js', () => {
//     return gulp.src('app/js/**/*.js')
//         .pipe(gulp.dest('dist/js'));
// });

// gulp.task('js-server', () => {
//     return gulp.src('app/server/**/*.js')
//         .pipe(gulp.dest('dist/server'));
// });

// gulp.task('js-modules', () => {
//     return gulp.src('app/modules/**/*.js')
//         .pipe(gulp.dest('dist/modules'));
// });


gulp.task('default', gulp.parallel('watch', 'server', 'styles'));