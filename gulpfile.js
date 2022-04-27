// const { src, dest, watch, series} = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const postcss = require("gulp-postcss");
// const cssnano = require("cssnano");
// const terser = require("gulp-terser");
// const browserSync = require('browser-sync').create();

// // Sass Task
// function scssTask() {
//     return src("scss/style.scss", {sourcemaps: true})
//         .pipe(sass().on('error', sass.logError))
//         .pipe(postcss([cssnano()]))
//         .pipe(dest('assets/css', {sourcemaps: '.'}));
// }

// // JS Task
// function jsTask() {
//     return src('assets/js/*.js', {sourcemaps: true})
//     .pipe(terser())
//     .pipe(dest('assets/js', {sourcemaps: '.'}));
// }

// // browserSync Tasks
// function browserSyncServe(cb) {
//     browserSync.init({
//         proxy: 'http://localhost/my-projects/html-css-reflection',
//         browser: ['firefox', 'chrome', 'edge'],
//         files: [
//             "css/*.css", "*.php", "inc/*.php", "js/*.js",
//         ]
//     });
//     cb()
// }

// function browseryncReload(cb){
//     browserSync.reload();
//     cb();
// }

// // Watch Task
// function watchTask() {
//     watch('*.php', browseryncReload);
//     watch(
//         ['scss/**/*.scss', 'assets/js/**/*.js'], 
//         series(scssTask, jsTask, browseryncReload)
//     );
// }

// // Default Gulp task
// exports.default = series(
//     scssTask,
//     jsTask,
//     browserSyncServe,
//     watchTask
// )




// Old BrowserSync Task

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// browserSync
gulp.task('browserSync', function(){
    browserSync.init({
        proxy: 'http://localhost/my-projects/othello-deemi-portfolio',
        browser: ['firefox', 'chrome'],
        files: [
            "assets/css/*.css", "*.php", "inc/**/*.php", "assets/js/*.js", "scss/*.scss"
        ]
    });
});
