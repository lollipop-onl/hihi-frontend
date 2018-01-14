const static = require('node-static');

const file = new static.Server('./dist');

require('http').createServer(function (request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  });
}).listen(process.env.PORT || 3000);
