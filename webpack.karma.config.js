const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const baseName = "capivara-archetype";

module.exports = function(config) {
  config.set({

    files: [
      'dist/'+baseName+'.min.js',
      'test/test.js'
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      '*.js': ['jshint'],
      'test/test.js': ['webpack'],
    },

    reporters: ['coverage', 'progress'],

    coverageReporter: {
      dir: 'build/coverage/',
      reporters: [
          { type: 'html' },
          { type: 'text' },
          { type: 'text-summary' }
      ]
    },

    webpack: require('./webpack.production.config'),

    webpackMiddleware: {
      noInfo: true
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    jshintPreprocessor: {
      jshintrc: './.jshintrc'
    },

    plugins: [
      require("karma-webpack"),
      require("istanbul-instrumenter-loader"),
      require("karma-jasmine"),
      require("karma-jshint-preprocessor"),
      require("karma-coverage"),
      require("karma-chrome-launcher"),
      require("karma-spec-reporter")
    ],

    browsers: ['Chrome']

  });
};