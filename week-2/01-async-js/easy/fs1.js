const fs = require('fs');

// Read contents of a file asynchronously
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:', data);

  // Simulate an expensive operation
  performExpensiveOperation();
});

function performExpensiveOperation() {
  // Simulate an expensive operation
  for (let i = 0; i < 1e7; i++) {
    // This loop is just an example of an expensive operation
  }

  console.log('Expensive operation completed.');
}
