const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const size = require('gulp-size');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Обработка SCSS
const scss = () => {
    return src(path.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false,
            overrideBrowserslist: ['last 4 version'],
            grid: true
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(size())
        .pipe(dest(path.scss.dest));
}

module.exports = scss;