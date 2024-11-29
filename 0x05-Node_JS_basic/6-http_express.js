const express = require('express');
const app = express();

// Route for the root path "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app
module.exports = app;
