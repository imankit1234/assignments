const fs = require('fs');

// Read contents of a file asynchronously
fs.readFile('a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:', data);

  
  performExpensiveOperation();
});

function performExpensiveOperation() {
  
  for (let i = 0; i < 1e7; i++) {
   
  }

  console.log('Expensive operation completed.');
}
