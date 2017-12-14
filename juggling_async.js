const http = require('http');
const bl = require('bl');

let count = 0;
let arr = [];
for (let i = 0; i < 3; i++) {
  http.get(process.argv[i + 2], (res) => {
    res.pipe(bl((err, data) => {
      if (err) {
        return console.log(err);
      }
      arr[i] = data.toString();
      count++;
      if (count === 3) {
        arr.forEach(e => console.log(e));
      }
    }));
  });
}



