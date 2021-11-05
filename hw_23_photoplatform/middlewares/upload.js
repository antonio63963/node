const multer = require('multer');
const fs = require('fs');
const path = require('path');

const folderUploads = path.resolve('public/images/photo');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, folderUploads)
  },
  filename(req, file, cb) {
    const type = file.mimetype.match(/\/(.*)$/i)[1];
    const fileName = `${req.body.albumID}${Date.now()}.${type}`;
    cb(null, `${fileName}`);
    req.params.photoNames += `,${fileName}`;
  },
});
const fileFilter = (req, file, cb) => {
    const typeFile = file.mimeType;
    console.log(req.files[0]);
    if(typeFile === 'image/png' || typeFile === 'image/jpg' || typeFile === 'image/jpeg'|| typeFile === 'image/webp') {
      cb(null, true);
    } else {
      cb(null, false);
    }

};

const upload = multer({storage});
const uploadArr = upload.array('uploaded_file', 10);

module.exports = {
  uploadArr,
}