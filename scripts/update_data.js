const fs = require('fs');

// Get the current date and time in a readable format.
const now = new Date();
const timestamp = now.toUTCString();

// An array of file paths to update.
// The script will now write to 5 separate files.
const filePaths = [
    'last_updated_1.txt',
    'last_updated_2.txt',
    'last_updated_3.txt',
    'last_updated_4.txt',
    'last_updated_5.txt'
];

// Loop through each file path and write the timestamp to it.
// This will create each file if it doesn't exist, or overwrite it if it does.
filePaths.forEach((filePath, index) => {
    fs.writeFileSync(filePath, `Update #${index + 1}: ${timestamp}\n`);
    console.log(`Successfully updated ${filePath} with the current timestamp.`);
});
