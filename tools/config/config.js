var browserSync = require('browser-sync');
var path = require('path');

var siteRoot = './public_html';
var themeDir = path.join(siteRoot, '/themes/custom/spts');
var sourceDir = path.join(themeDir, '/src');
var buildDir = path.join(themeDir, '/build');
var incPaths = [
  './node_modules/susy/sass',
  './node_modules/breakpoint-sass/stylesheets'
];

var grunticonOptions = require(path.join(process.cwd(), sourceDir, '/img/svg/grunticonOptions.js'));

module.exports = {
  css: {
    input: sourceDir + '/scss/**/*.scss',
    output: buildDir + '/css',
    sourcemapsDir: '.',
    options: {
      errLogToConsole: true,
      includePaths: incPaths
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  watch: {
    css: [sourceDir + '/scss/**/*.scss'],
    js: sourceDir + '/js/**/*.{js,jsx}'
  },
  browserSync: {
    instance: browserSync.create(),
    proxy: process.env.BSPROXY || 'spts.dev',
    files: [
      buildDir + '/**/*.*',
      themeDir + '/**/*.{theme,twig, yml}'
    ],
    reloadDebounce: 2000
  },
  js: {
    filesBundles: sourceDir + '/js/*.js',
    filesSource: sourceDir + '/js/**/*.js',
    filesBuild: buildDir + '/js',
    babelPresets: [
      'babel-preset-es2015',
      'babel-preset-react'
    ],
    babelPlugins: []
  },
  svg: {
    grunticonOptions: grunticonOptions,
    filesSource: sourceDir + '/img/svg',
    filesBuild: buildDir + '/img/svg'
  }
};
