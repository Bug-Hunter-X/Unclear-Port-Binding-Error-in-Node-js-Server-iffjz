const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

function onServerError(err) {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please close the conflicting application or choose a different port.`);
    process.exit(1);
  } else {
    console.error(`Server error: ${err.message}`);
    process.exit(1);
  }
}

server.on('error', onServerError);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});