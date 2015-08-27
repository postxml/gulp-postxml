var postxml = require('../');
var expect = require('chai').expect;
var gulp = require('gulp');
var fs = require('fs');

var plugin1 = require('./plugin1.js');
var plugin2 = require('./plugin2.js');

var test = function (input, output, opts, plugins) {

   fs.writeFileSync('test/input/index.htm', input)

   gulp.src('test/input/index.htm')
      .pipe(postxml(plugins, opts))
      .pipe(gulp.dest('test/output/'));

   input = String(fs.readFileSync('test/output/index.htm')).replace(/\n/g, '');

   expect(input).to.eql(output);
};

describe('gulp-postxml', function () {
    it('change tags', function () {
        test(
            '<block class="b-block"><element class="b-block__element">Текст</element></block>',
            '<block class="b-block"><div class="b-block__element" mod="mod">Текст</div></block>',
            {},
            [
               plugin1(['element']),
               plugin2(['div'])
            ]
        );
    });
});
