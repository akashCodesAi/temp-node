const fs = require('fs');

// Specify the file name and content
const fileName = 'example.txt';
const fileContent = 'Hello, this is the content of the file!';

// Use the writeFile method to create the file
fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully!');
  }
});
