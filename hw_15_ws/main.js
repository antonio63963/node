const WSServer = require('ws')
const http = require('http');
const fs = require('fs');

const sendFile = (res, path, type) => {
  const filePath = `${__dirname}/${path}`;
  res.writeHead(200, {
    'Content-Type': type,
  });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res)
}

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    sendFile(res, 'public/index.html', 'text/html');
    return;
  };
  if(req.url === '/js/index.js') {
    sendFile(res, 'public/js/index.js', 'application/javascript')
    return;
  }
  res.writeHead(404);
  res.end();
})

server.listen(3000, () => console.log(`SERVER START PORT 3000`));

//WS server

wsServer = new WSServer.Server({server});

wsServer.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('recieved: ', message);
  })

  ws.send('something');
});