/* const http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', chunk => rawData += chunk);
  res.on('end', () => {
    try {
      console.log(rawData.length);
      console.log(rawData);
    } catch (e) {
      console.error(e.message);
    }
  });
}); */

/* const http = require('http');
const concat = require('concat-stream');

http.get(process.argv[2], (res) => {
  res.pipe(concat((data) => {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
}); */

const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (res) => {
  res.pipe(bl((err, data) => {
    if (err) {
      return console.log(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

