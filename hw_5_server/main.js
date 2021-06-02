const http = require('http');
const https = require('https');
const { page } = require('./pageHtml');
const fs = require('fs');

const urlPic = `https://bigpicture.ru/wp-content/webp-express/webp-images/uploads/2012/07/cats-32.jpg.webp`

function copyFile(url, fileName) {
  let file = fs.createWriteStream(fileName)
  https.get(url, response => {
    response.pipe(file)
    // console.log(file);
  })
  return file
}


http.createServer((request, response) => {

  let f = copyFile(urlPic, 'cat.jpg')
  console.log('new File is:  ', f.path);
  response.end(`<img src="${f.path}"></img>`)

}).listen(3000)







