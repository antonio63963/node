const multer = require('multer');
const fs = require('fs');
const path = require('path');

const folderUploads = path.resolve('public/images');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, folderUploads)
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
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
const uploadArr = upload.array('uploaded_file');

module.exports = {
  uploadArr
}