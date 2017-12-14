/* const fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
  if (err) throw err;
  
  for (let i = 0, len = files.length; i < len; i++) {
    if (files[i].endsWith('.' + process.argv[3])) {
      console.log(files[i]);
    }
  }
}); */

const fs = require('fs');
const path = require('path');

let folder = process.argv[2];
let ext = '.' + process.argv[3];

fs.readdir(folder, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});