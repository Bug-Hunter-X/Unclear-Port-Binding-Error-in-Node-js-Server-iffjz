const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});