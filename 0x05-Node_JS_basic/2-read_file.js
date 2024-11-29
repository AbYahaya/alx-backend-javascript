const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    
    // Split the data by line, ignoring empty lines
    const lines = data.trim().split('\n');

    // Extract headers and student records
    const headers = lines[0].split(',');
    const students = lines.slice(1).map(line => line.split(','));

    // Check if there are any students
    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Create an object to store students by field
    const fields = {};

    students.forEach(student => {
      const name = student[0];
      const field = student[1];

      if (fields[field]) {
        fields[field].push(name);
      } else {
        fields[field] = [name];
      }
    });

    // Calculate and display the number of students
    console.log(`Number of students: ${students.length}`);
    
    // Log the number of students and their names per field
    Object.keys(fields).forEach(field => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
    
  } catch (err) {
    // Handle errors such as file not being found
    console.error(err.message);
  }
}

module.exports = countStudents;
