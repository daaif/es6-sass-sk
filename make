#!/usr/bin/env node

'use strict'

let command = process.argv[2],
    utils   = require('./tasks/_utils');
    if(command === 'init'){
        let init   = require('./tasks/init')
        init()
    } else {
        let eslint = require('./tasks/eslint'),
            build = require('./tasks/build'),
            sass = require('./tasks/sass'),
            watch = require('./tasks/watch'),
            minify = require('./tasks/minify')
        switch(command) {
            case 'init':

                break
            case 'eslint':
                eslint()
                break
            case 'build':
                build()
                break
            case 'sass':
                sass()
                break
            case 'watch':
                watch()
                break
            case 'minify':
                minify()
                sass('compressed')
                break
            default:
                //eslint()
                build()
                    .then(sass)
                    .then(minify)
                    .then(function () {
                        utils.print('ES6 and SASS successfully compiled!', 'confirm')
                    })
        }
    }

