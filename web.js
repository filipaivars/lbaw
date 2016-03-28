var gzippo = require('gzippo');
  var express = require('express');
  var app = express();

  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(process.env.PORT || 5000);
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
