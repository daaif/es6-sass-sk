let utils = require('./_utils'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    sass = require('node-sass'),
    esskOptions = require('./../../../.es6-sass-sk');



module.exports = function() {

    // delete the old ./dist folder
    utils.clean(esskOptions.cssDest)

    /**
     * Create a promise based on the result of the webpack compiling script
     */

    return new Promise(function(resolve, reject) {
        sass.render({
            file: `${esskOptions.scssBasePath}/${esskOptions.library}.scss`
        },function (err, result) {
            console.log(result)
            mkdirp(esskOptions.cssDest, function() {
                if(err !== null) {
                    utils.print(err, 'error')
                    reject(err)
                }
                try {
                    fs.writeFileSync(`${esskOptions.cssDest}/${esskOptions.library}.css`, result.css, 'utf8')
                    resolve()
                } catch (e) {
                    reject(e)
                }
            })
        });

    })
}
