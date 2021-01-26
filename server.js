const net = require('net');
const server = net.createServer((connection) => {
  console.log('Client Connected');

  connection.on('end', () => console.log('Client Disconnected'));

  connection.write('Hello World!\r\n');
  connection.pipe(connection);
});

server.listen(8080, () => {
  console.log('Server running on http://localhost8080');
})