const multer = require('multer');
const path = require('path');

const folderUploads = path.resolve('public/images/photo');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, folderUploads)
  },
  filename(req, file, cb) {
    const type = file.mimetype.match(/\/(.*)$/i)[1];
    const filePath = `${req.body.albumID}_${Date.now()}.${type}`;
    cb(null, `${filePath}`);
    req.params.photoPath += `,${filePath}`;
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