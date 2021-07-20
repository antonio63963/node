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
  if(req.url === 'styles/style.css') {
    sendFile(res, 'public/styles/style.css', 'text/css')
    return;
  }
  res.writeHead(404);
  res.end();
})

server.listen(3000, () => console.log(`SERVER START PORT 3000`));
// data 
const prodList = [
  {id: 1, title: 'fox', price: 44, description: 'some description'},
  {id: 2, title: 'dog', price: 55, description: 'some description'},
  {id: 3, title: 'cat', price: 66, description: 'some description'}
]

//WS server

wsServer = new WSServer.Server({server});

wsServer.on('connection', (socket) => {
  let count = 0;
  let startRes = 'i feel good!';

  socket.on('message', (message) => {
    const req = JSON.parse(message);
    console.log(req);

    if(req.type == 'userNumber') {
      count += Number(req.data);
      console.log('recieved: ', req.data);
      console.log('count: ', count);
      res = 'good number, guy!'
    }
    if(req.type == 'prodList') {
      console.log('you wanna list...');
      res = JSON.stringify({type: 'prodList',data: prodList});
      socket.send(res)
    }
  })

  socket.send(JSON.stringify(startRes));
});