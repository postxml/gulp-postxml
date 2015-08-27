var postxml = require('../postxml');
var through = require('through2');

module.exports = function (plugins, opts) {
   return through.obj(function (chunk, enc, callback) {
      var file = postxml(String(chunk.contents), plugins, opts);
      chunk.contents = new Buffer(file);
      callback(null, chunk);
   });
}
