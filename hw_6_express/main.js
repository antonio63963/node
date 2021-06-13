const express = require('express');
const path = require('path');



const server = express();
// server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(express.static('static'));

server.get('/form', (req, res) => {
  const pathFile = path.join(__dirname +'/public', './form.html');
  res.sendFile(pathFile);
});

server.post('/userData',  (req, res) => {

  console.log(req.body);
  console.log(req.body.userFile);
  res.send('ok')
})
server.listen(8888)

