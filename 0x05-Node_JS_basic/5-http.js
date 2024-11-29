const http = require('http');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to count students from the CSV file
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    const studentsByField = {};
    let totalStudents = 0;

    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      const fields = line.split(',');
      const name = fields[0];
      const field = fields[3];

      if (name && field) {
        totalStudents += 1;
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(name);
      }
    });

    rl.on('close', () => {
      if (totalStudents === 0) {
        reject(new Error('Cannot load the database'));
      } else {
        const result = [`Number of students: ${totalStudents}`];
        for (const field in studentsByField) {
          const studentNames = studentsByField[field].join(', ');
          result.push(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentNames}`);
        }
        resolve(result.join('\n'));
      }
    });

    rl.on('error', () => {
      reject(new Error('Cannot load the database'));
    });
  });
}

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Route for the root path "/"
  if (url === '/') {
    res.end('Hello Holberton School!\n');
  }
  
  // Route for the "/students" path
  else if (url === '/students') {
    const filePath = process.argv[2];
    
    if (!filePath) {
      res.statusCode = 500;
      res.end('Database file is missing.\n');
      return;
    }

    try {
      const studentsData = await countStudents(filePath);
      res.end(`This is the list of our students\n${studentsData}\n`);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  }
  
  // Handle unknown routes
  else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app variable
module.exports = app;
