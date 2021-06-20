
const express = require('express');
const path = require('path');
const multer = require('multer');
const parser = require('body-parser');
const fs = require('fs');
const { promises: Fs} = require('fs');
async function renameFile(name, newName, dir) {

  Fs.rename(`${dir}/${name}`, `${dir}/${newName}`)
 
}

const upload = multer({dest: path.join(__dirname, 'public/upload')});
const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public/js')));
server.use(express.static(path.join(__dirname, 'public/style')));

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.get('/form', (req, res) => {
  res.render('mainPage');
})

server.post('/form/req', upload.single('fileSend'), (req, res) => {
  
  const newName = req.body.fileName;
  const dir = './public/upload';
  const name = req.file.filename;
  renameFile(name, newName, dir);

  console.log('req.file: ' ,req.file);
  res.json({status: 'ok'});
})

server.listen(1231);

