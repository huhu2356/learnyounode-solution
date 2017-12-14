const fs = require('fs');
const path = require('path');

const printFilesWithExt = (folder, extname, callback) => {
  fs.readdir(folder, (err, files) => {
    if (err) return callback(err);

    files = files.filter(file => path.extname(file) === '.' + extname);
    callback(null, files);
  });
};

module.exports = printFilesWithExt;