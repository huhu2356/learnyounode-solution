const mymodule = require('./make_it_modular2');

let folder = process.argv[2];
let extname = process.argv[3];

mymodule(folder, extname, (err, data) => {
  if (err) {
    return console.log(err);
  }
  
  data.forEach(element => {
    console.log(element);
  });
});