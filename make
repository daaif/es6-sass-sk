#!/usr/bin/env node

'use strict'

//global.library = 'main'

/**
 * Each task required (except watch) returns a promise so you will be able to chain them as you prefer
 */


let command = process.argv[2],
    utils   = require('./tasks/_utils');

switch(command) {
  case 'init':
    let init   = require('./tasks/init')
    init()
    break
  case 'serve':
    let serve   = require('./tasks/serve')
    serve()
    break
  case 'eslint':
    let eslint  = require('./tasks/eslint')
    eslint()
    break
  case 'build':
    let build   = require('./tasks/build')
    build()
    break
  case 'sass':
    let sass  = require('./tasks/sass')
    sass()
    break
  case 'watch':
    let watch   = require('./tasks/watch')
    watch()
    break
  case 'minify':
    let  minify  = require('./tasks/minify')
    minify()
    break
  case 'test':
    let test    = require('./tasks/test')
    test()
    break
  case 'saucelabs':
    test({
      saucelabs: true
    })
    break
  default:
      eslint()
      .then(build)
      .then(sass)
      .then(minify)
      .then(test)
      .then(function(){
        utils.print('Project successfully compiled!', 'confirm')
      })

}

