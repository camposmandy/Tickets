'use strict';

module.exports = function (config) {
  config.set({
    autoWatch: true,
    browsers: ['PhantomJS'],
    files: [
      //'app/**/*.spec.ts'
      //'app/**/*.spec.js'
      'karma.entry.js'
    ],
    frameworks: ['jasmine'],
    logLevel: config.LOG_INFO,
    phantomJsLauncher: {
      exitOnResourceError: true
    },
    port: 9876,
    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: require('./webpack/webpack.test.js'),
    webpackServer: {
      noInfo: true
    }
  });
};
