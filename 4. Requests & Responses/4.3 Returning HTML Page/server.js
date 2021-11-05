const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set the response header
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    }
        res.write(data);
        res.end(data);
    });

});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});