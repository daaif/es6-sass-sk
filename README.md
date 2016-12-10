ES6 and SASS Starter Kit to build  javascript ES6/SASS project runnable on any browser
======================================================================================

## 1 - Install
```{r, engine='bash', count_lines}
npm install --save-dev es6-sass-sk
```
## 2 - package.json scripts
Add this lines to *scripts* field in *package.json*
```json
"scripts": {
    "build": "es6-sass build",
    "sass": "es6-sass sass",
    "eslint": "es6-sass eslint",
    "minify": "es6-sass minify",
    "watch": "es6-sass watch"
  }
```
## 3 - Usage
```
npm run build       # transpile and bundle es6 to es5 single file
npm run sass        # transpile .scss files to css file and generate sourceMap file
npm run minify      # uglify and generates .min.js file and compress .css file
npm run eslint      # parse js files and show errors according to .eslintrc config file
npm run watch       # enable watch mode on all js an scss files
```
## 4 - Customize es6 and scss entries 
npm installs a default *.es6-sass-sk* config file. you can change defaults.
```javascript
module.exports  = {
    /**
     * the name bundled output files main.js and main.css
     * Olso the js namespace in the global scope window.main
     */
    library: 'main',
    /**
     * ES6 source folder. A subfolders are scanned
     */
    jsBasePath: './src/js',
    /**
     * SASS source folder. A subfolders are scanned
     */
    scssBasePath: './src/scss',
    /**
     * ES5 destination folder.
     */
    jsDest: './dist/js',
    /**
     * SASS destination folder.
     */
    cssDest: './dist/css'
};
```



