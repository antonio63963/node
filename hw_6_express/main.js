const express = require('express');
const path = require('path');

const server = express();

server.get('/form', (req, res) => {
  const pathFile = path.join(__dirname +'/public', './form.html');
  server.use(express.static('static'));
  res.sendFile(pathFile);
});

server.put('/userData', (req, res) => {
  console.log(req.query);
})
server.listen(8888)

