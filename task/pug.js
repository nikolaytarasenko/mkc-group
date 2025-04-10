const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugs = require('gulp-pug');
const formatHtml = require('gulp-format-html');

// Обработка PUG
const pug = () => {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'PUG',
                message: error.message
            }))
        }))
        .pipe(pugs({
            pretty: true
        }))
        .pipe(formatHtml({
            indent_size: 4
        }))
        .pipe(dest(path.pug.dest));
}

module.exports = pug;