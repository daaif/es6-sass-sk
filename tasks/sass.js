let utils = require('./_utils'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    sass = require('node-sass'),
    esskOptions = require('./../../../.es6-sass-sk');

/**
 *
 * @param compress {string} default nested, expanded, compact, compressed
 * @return {Promise}
 */

module.exports = function(compress) {
    compress = compress || 'nested';
    // delete the old ./dist folder
    utils.clean(esskOptions.cssDest)

    return new Promise(function(resolve, reject) {
        sass.render({
            file: `${esskOptions.scssBasePath}/${esskOptions.library}.scss`,
            outFile: `${esskOptions.scssBasePath}/${esskOptions.library}.css`,
            outputStyle: compress,
            sourceMap: true
        },function (err, result) {
            console.log(result)
            mkdirp(esskOptions.cssDest, function() {
                if(err !== null) {
                    utils.print(err, 'error')
                    reject(err)
                }
                try {
                    fs.writeFileSync(`${esskOptions.cssDest}/${esskOptions.library}.css`, result.css, 'utf8')
                    fs.writeFileSync(`${esskOptions.cssDest}/${esskOptions.library}.css.map`, result.map, 'utf8')
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        });

    })
}
