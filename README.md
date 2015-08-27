# Gulp-postxml

It is a plugin for gulp that transforms xml and html with JS plugins using [cheerio API](http://cheeriojs.github.io/cheerio/).

## Usage

### Instalation

`npm i gulp-postxml --save-dev`

### Gulp

```js
var postxml = require('gulp-postxml');
var postxmlPlugins = [
      require('postxml-plugin')
   ];
var cheerioOptions = {};

gulp.task('html', function () {
   gulp.src('index.htm')
      .pipe(postxml(postxmlPlugins, cheerioOptions))
      .pipe(gulp.dest('out'));
})
```
