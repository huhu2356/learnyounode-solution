const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);
  const parseQueryString = querystring.parse(parseUrl.query);
  const time = new Date(parseQueryString.iso);
  let result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, {'content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time) {
  return {
    unixtime: time.getTime()
  };
}

server.listen(process.argv[2]);