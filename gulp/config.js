'use strict';

module.exports = {
  'serverport': 1337,
  'scripts': {
    'src': './src/js/**/*.js',
    'dest': './ApplicationWeb/js/'
  },
  'nativeApp': {
    'src': './src/js/**/*.js',
    'dest': './ApplicationNative/ApplicationNative/app/'
  },
  'styles': {
    'src': './src/scss/**/*.scss',
    'dest': './ApplicationWeb/css/'
  },
  'sourceDir': './src/',
  'buildDir': './ApplicationWeb/',
  'buildNative' : './ApplicationNative/ApplicationNative'
};