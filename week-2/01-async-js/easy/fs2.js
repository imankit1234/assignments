const fs = require('fs');

// Content to be appended to the file
const contentToAppend = 'This content will be appended to the file.';

// Append to a file asynchronously
fs.appendFile('a.txt', contentToAppend, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }

  console.log('Content successfully appended to a.txt');

  // Now, let's read the file to verify its content
  fs.readFile('a.txt', 'utf8', (readErr, data) => {
    if (readErr) {
      console.error('Error reading file:', readErr);
      return;
    }

    console.log('File contents after appending:', data);
  });
});

console.log('Appending to file...');
