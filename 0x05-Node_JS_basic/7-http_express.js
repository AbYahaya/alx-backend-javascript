const express = require('express');
const fs = require('fs').promises;
const app = express();

// Helper function to read and parse the CSV file asynchronously
const countStudents = async (filePath) => {
  try {
    // Read the CSV file
    const data = await fs.readFile(filePath, 'utf8');

    // Split data into lines and remove empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    
    // Extract headers
    const headers = lines[0].split(',');

    // Create a mapping of students by field
    const students = {
      CS: [],
      SWE: [],
    };

    // Loop through the lines and categorize the students
    lines.slice(1).forEach((line) => {
      const [firstName, field] = line.split(',');
      if (field === 'CS' || field === 'SWE') {
        students[field].push(firstName);
      }
    });

    // Count total students
    const totalStudents = lines.length - 1; // Excluding header row

    // Prepare output for students
    let result = `Number of students: ${totalStudents}\n`;

    // Add the number of students in each field
    Object.keys(students).forEach((field) => {
      result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
    });

    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

// Route for the root path "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

// Route for "/students"
app.get('/students', async (req, res) => {
  const dbFilePath = req.query.db || '';  // Expecting the database file path as query parameter
  if (!dbFilePath) {
    return res.status(400).send('Database file path is required');
  }

  try {
    const result = await countStudents(dbFilePath);
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app
module.exports = app;
