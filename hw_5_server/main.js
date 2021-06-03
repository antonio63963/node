const http = require('http');
const https = require('https');
const fs = require('fs');

const urlPic = `https://bigpicture.ru/wp-content/webp-express/webp-images/uploads/2012/07/cats-32.jpg.webp`

function copyFile(url, fileName) {
  let file = fs.createWriteStream(`./public/${fileName}`)
  https.get(url, response => {
    response.pipe(file)
    // console.log(file);
  })
  return file
}

copyFile(urlPic, 'cat.jpg');

http.createServer((request, response) => {
  const filePath = request.url.substring(1);
  fs.access(`./public/${filePath}`, fs.constants.R_OK, err => {
    if(err) {
      response.status = 404;
      response.end('Page not found');
    }
    else {
      fs.createReadStream(`./public/${filePath}`).pipe(response)
    }
  })
}).listen(3000)










