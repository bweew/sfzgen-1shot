const fs = require('fs');
const path = require('path');

const folderPath = ''; // 👀🎈Specify the path to your folder
	// on mac make sure to remove those hidden .ds files also

// Read the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const sfzFilePath = '/my-kit.sfz'; // 🎈Specify the path for the output SFZ file
  let sfzContent = '';

  files.forEach((file, index) => {
    const filePath = path.join(folderPath, file);
    const noteNumber = index + 48; // Note number starting from C3 (MIDI note number 48)

    // Append SFZ content for each file
    sfzContent += `<region> sample=${file} key=${noteNumber}\n`;
  });

  // Write the SFZ file
  fs.writeFile(sfzFilePath, sfzContent, (err) => {
    if (err) {
      console.error('Error writing SFZ file:', err);
      return;
    }
    console.log(`SFZ file written successfully at: ${sfzFilePath}`);
  });
});
