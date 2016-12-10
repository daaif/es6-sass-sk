var utils = require('./_utils'),
   esskOptions = require('./../../../.es6-sass-sk');

module.exports = function(options) {

  options = utils.extend({
    // Folders containing the files we need to check
    folders: [
      'src',
      'test'
    ]
  }, options)

  // Run eslint
  return utils.exec('./node_modules/.bin/eslint', options.folders)

}
