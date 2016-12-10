var utils = require('./_utils'),
  fs = require('fs'),
  uglify = require('uglify-js'),
  esskOptions = require('./../../../.es6-sass-sk');

module.exports = function(options) {
/*

  options = utils.extend({
    // folder where the library output is located
    base: 'dist/'
  }, options)
*/

  let jsSourcePath = `${esskOptions.jsDest}/${esskOptions.library}.js`,
    jsOutputPath = `${esskOptions.jsDest}/${esskOptions.library}.min.js`,
    outputJS = uglify.minify(jsSourcePath)

  /**
   * Create a promise based on the result of the uglify output
   */
  return  new Promise(function(resolve, reject) {
    // write the result of the uglify script in the output folder
    fs.writeFile(jsOutputPath, outputJS.code, function(err) {
      if (err) {
        utils.print(err, 'error')
        reject(err)
      } else {
        utils.print('JS minified', 'confirm')
        utils.print(`Created file: ${jsOutputPath}`, 'cool')
        resolve()
      }
    })
  })

}
