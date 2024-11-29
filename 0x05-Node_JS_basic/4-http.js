const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;
