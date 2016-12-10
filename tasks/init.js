let fs = require('fs'),
    fse = require('fs-extra'),
    utils = require('./_utils'),
    path = require('path');
module.exports = () => {
    console.log("XYZ................. " + path.resolve())
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
            utils.print("index.html folder copied successfully.", "cool")
        }
    });
    fse.copy("./.es6-sass-sk.js", "./../../.es6-sass-sk.js", (err) => {
        if(err){
            utils.print(err, "error")
        } else {
            utils.print(".es6-sass-sk.js folder copied successfully.", "cool")
        }
    });
}
