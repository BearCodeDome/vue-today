'use strict';

/**
* Modules dependencies.
*/
const gulp = require('gulp');
const webpack = require('webpack');
const gutil = require('gulp-util');
const WebpackDevServer = require('webpack-dev-server');

/**
* Build consts.
*/

/**
* task webpack-build.
*/
gulp.task('webpack-build', function () {
  let compiler = webpack(require('./webpack.config'));
  compiler.run(function(err, stats) {
    if(err) {
      throw new gutil.PluginError('webpack-build', err);
    } else {
      gutil.log('[webpack-build]', gutil.colors.green(stats.toString()));
    }
  });
});


/**
* task webpack-dev-server
*/
gulp.task('webpack-dev-server', function () {
  let config = require('./webpack.config');
  config.entry.app.unshift(
    'webpack-dev-server/client?http://localhost:8080'
    , 'webpack/hot/dev-server'
  );
  new WebpackDevServer(webpack(config), {
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    publicPath: '/build',
    stats: { colors: true }
  }).listen(8080, 'localhost', function (err) {
    if(err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    } else {
      gutil.log('[webpack-dev-server]'
      , gutil.colors.green('http://localhost:8080/build/'));
    }
  });
});


/**
* task dev.
*/
gulp.task('dev', ['webpack-dev-server'], function() {

});

/**
* task production.
*/
gulp.task('production', function () {

});

/**
* task default.
*/
gulp.task('default', ['dev'], function () {

});
