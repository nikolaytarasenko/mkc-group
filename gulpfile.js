const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Config
const path = require('./config/path.js');
const app = require('./config/app.js');

// Tasks
const clear = require('./task/clear.js');
const pug = require('./task/pug.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const video = require('./task/video.js');

// Server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Watchers
const watcher = () => {
    watch(path.pug.watch, pug).on('all', browserSync.reload);
    watch(path.scss.watch, scss).on('all', browserSync.reload);
    watch(path.js.watch, js).on('all', browserSync.reload);
    watch(path.img.watch, img).on('all', browserSync.reload);
    watch(path.font.watch, font).on('all', browserSync.reload);
    watch(path.video.watch, video).on('all', browserSync.reload);
}

const build = series(
    clear,
    parallel(pug, scss, js, img, font, video)
);

const dev = series(
    build,
    parallel(watcher, server)
);

// Tasks
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.video = video;
exports.build = build;

exports.default = app.isProd
    ? build 
    : dev;