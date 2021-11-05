const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});