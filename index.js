var postxml = require('postxml');
var through = require('through2');

module.exports = function (plugins, opts) {
   return through.obj(function (chunk, enc, callback) {
      var file = postxml(plugins).process(String(chunk.contents), opts);
      chunk.contents = new Buffer(file);
      callback(null, chunk);
   });
}
