let fs = require('fs'),
    fse = require('fs-extra'),
    utils = require('./_utils'),
    path = require('path');
module.exports = () => {
    fse.copy("./src", "./../../src", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("src folder copied successfully.", "cool")
        }
    });
    fse.copy("./dist", "./../../dist", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("dist folder copied successfully.", "cool")
        }
    });
    fse.copy("./index.html", "./../../index.html", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print("index.html file copied successfully.", "cool")
        }
    });
    fse.copy("./.es6-sass-sk.js", "./../../.es6-sass-sk.js", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print(".es6-sass-sk.js file copied successfully.", "cool")
        }
    });
    fse.copy("./.eslintrc", "./../../.eslintrc", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print(".eslintrc file copied successfully.", "cool")
        }
    });
}
