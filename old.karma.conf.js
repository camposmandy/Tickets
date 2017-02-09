'use strict';

var webpackConfig = require('./webpack.config.js');
//require('phantomjs-polyfill');
webpackConfig.entry = {};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatchBatchDelay: 300,
    files: [
      'app/**/*.spec.ts',
      'app/**/*.spec.js'
    ],
    preprocessors: {
      'app/**/*.spec.ts': ['webpack'],
      'app/**/!(*.spec)+(.js)': ['coverage']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true,
      stats: {
        colors: true
      }
    },
    reporters: [
      'dots',
      'spec',
      'coverage'
    ],
    coverageReporter: {
      reporters: [
        {
          dir: 'reports/coverage/',
          subdir: '.',
          type: 'html'
        },{
          dir: 'reports/coverage/',
          subdir: '.',
          type: 'cobertura'
        }, {
          dir: 'reports/coverage/',
          subdir: '.',
          type: 'json'
        }
      ]
    }
  });
};
