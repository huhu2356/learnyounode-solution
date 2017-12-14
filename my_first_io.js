const fs = require('fs');

let contents = fs.readFileSync(process.argv[2]);
let str = contents.toString();

console.log(str.split('\n').length - 1);