const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // read HTML file
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error loading HTML file');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3010;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});