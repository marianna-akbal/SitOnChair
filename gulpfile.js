

var gulp = require("gulp");
var sass = require("gulp-sass");
// Podlgląd w czasie rzeczywistym
var browserSync = require('browser-sync').create();
//Sourcemapa
var sourcemaps = require('gulp-sourcemaps');
//Autoprefixer -automatycznie dodaje prefixy (Bardzo ulatwia pracę - szczegolnie z flexboxem, ktory ma nieoczywiste prefixy)
var autoprefixer = require('gulp-autoprefixer');
//Te dwie paczki sprawią, że gulp watch i gulp-serve nie będzie się wywalał przy każdym błędzie
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');



gulp.task("sass", function() {
    return gulp.src("sass/style.scss")
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red(error.message));
            this.emit('end');
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['> 1%'], //największy zakres ['> 1%'] - więcej niż 99% procent przeglądarek
            cascade: false
        }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});
//Jeśli potrzebujemy browser sync
// komenda gulp serve
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
//Jesli wystaczy nam watch
//Komenda gulp watch
gulp.task("watch", function() {
    gulp.watch("sass/**/*.scss", ["sass"]);
});
//Jeżeli jesteś na macu lub linuxie instalacja paczek może wymagac sudo
/**
 * FAQ
 * 1. gulp watch, gulp sass lub gulp sass nie działają - sprawdź czy widzisz w katalogu projektu folder node_modules, sprawdź czy w pliku package.json w devDependencies są wszystkie wtyczki - eventualnie doinstaluj wtyczki np. npm install gulp gulp-sass --save-dev, jeżli nie ma katalogu node_modules a jest plik package.json w terminalu wpisz npm install
 * 2. gulp watch, gulp serve lub gulp sass działają ale nie widzę zmian - sprawdź czy w pliku index.html załączyłeś plik main.css, sprawdź czy terminal jest otwarty we właściwym katalogu z twoim projektem
 */
