const fs = require('fs');

// Function to clean extra spaces from a string
function cleanSpaces(inputString) {
  return inputString.replace(/\s+/g, ' ').trim();
}

// Function to clean a file and overwrite it with cleaned content
function cleanFile(filePath) {
  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Clean the content
    const cleanedContent = cleanSpaces(data);

    // Write the cleaned content back to the file
    fs.writeFile(filePath, cleanedContent, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to file:', writeErr);
        return;
      }

      console.log('File cleaned and updated successfully.');
    });
  });
}

// Specify the file path here
const filePath = 'a.txt';

// Run the file cleaner
cleanFile(filePath);
