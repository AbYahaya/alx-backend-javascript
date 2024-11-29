const readline = require('readline');

// Create an interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message and prompt for the user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the entered name
  console.log(`Your name is: ${name}`);

  // Close the readline interface and display the closing message
  rl.on('close', () => {
    console.log('This important software is now closing');
  });

  // Close the interface
  rl.close();
});
