const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously using fs.promises.readFile
    const data = await fs.readFile(path, 'utf-8');
    
    // Split the data by lines and remove empty lines
    const lines = data.trim().split('\n');

    // Extract headers and student records
    const headers = lines[0].split(',');
    const students = lines.slice(1).map(line => line.split(','));

    // Check if there are students
    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Create an object to store students by field
    const fields = {};

    students.forEach(student => {
      const name = student[0];
      const field = student[1];

      // Group students by their field
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

    return Promise.resolve();
    
  } catch (err) {
    // Handle errors such as file not being found
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
