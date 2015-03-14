
var argv = require('yargs')
      .default('env', 'dev')
      .default('port', '1984')
      .argv,
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    gulp = require('gulp'),
    gulpWebpack = require('gulp-webpack'),
    handlebars = require('gulp-compile-handlebars'),
    minifyCSS = require('gulp-minify-css'),
    objectAssign = require('object-assign'),
    path = require('path'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass'),
    util = require('gulp-util'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack-config'),
    WebpackDevServer = require('webpack-dev-server'),
    π = require('./src/constants');

var BUILD_PATH = path.join('build', argv.env);

gulp.task('build', ['revision', 'copy:assets']);
gulp.task('build:prod', ['build']);

gulp.task('clean', function (cb) {
  del([
    BUILD_PATH + '/**'
  ], cb);
});

gulp.task('copy:assets', ['clean'], function () {
  return gulp.src([
      'assets/**/*'
    ])
    .pipe(gulp.dest(BUILD_PATH));
});

// Drop a compiled copy of index.html into the build for webpack dev server to serve up
gulp.task('copy:html', ['clean'], function () {
  var handlebarsData = {
    dev: argv.env === 'dev',
    fontCDN: '/fonts', // Use local fonts in dev mode
    'bundle.js': 'bundle.js' // Since we're not revisioning in dev mode
  };
  objectAssign(handlebarsData, π.meta.default); // Load default metadata so it's not blank

  return gulp.src([
    'src/*.html'
  ])
  .pipe(handlebars(handlebarsData))
  .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('default', ['build']);

gulp.task('dev', ['copy:html', 'copy:assets', 'webpack:dev', 'serve'], function () {
  gulp.watch(['src/**/*.html', 'assets/**/*'], ['copy:html', 'copy:assets']);
  gulp.watch(['src/**/*'], function (e) {
    util.log(util.colors.cyan(e.path), 'changed');
  });
});

gulp.task('revision', ['clean', 'sass', 'webpack:prod'], function(cb){
  return gulp.src([BUILD_PATH + '/**/*.css', BUILD_PATH + '/**/*.js'])
    .pipe(rev())
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(rev.manifest())
    .pipe(gulp.dest(BUILD_PATH))
});

gulp.task('sass', ['clean'], function () {
    gulp.src('src/styles/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('serve', function() {
  var devConfig = Object.create(webpackConfig.dev);

  new WebpackDevServer(webpack(devConfig), {
      contentBase: BUILD_PATH,
      hot: true,
      noInfo: true,
      stats: { colors: true },
      historyApiFallback: true
  }).listen(argv.port, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:' + argv.port);
  });
});

gulp.task('webpack:dev', ['clean'], function () {
  return gulp.src('src/client.js')
    .pipe(gulpWebpack(webpackConfig.dev))
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('webpack:prod', ['clean'], function () {
  gulp.src('src/client.js')
    .pipe(gulpWebpack(webpackConfig.client))
    .pipe(gulp.dest(BUILD_PATH));

  return gulp.src('src/server.js')
    .pipe(gulpWebpack(webpackConfig.server))
    .pipe(gulp.dest('.'));
});
