/* const net = require('net');

const server = net.createServer((socket) => {
  socket.end(now() + '\n');
})

function now() {
  const d = new Date();
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' + 
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes()); 
}

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

server.listen(process.argv[2]); */


const net = require('net');
const strftime = require('strftime');

const server = net.createServer((socket) => {
  socket.end(strftime('%F %R', new Date()) + '\n');
})

server.listen(process.argv[2]);