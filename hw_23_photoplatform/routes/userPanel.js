var express = require('express');
var router = express.Router();
const path = require('path');
const { promises: FS } = require('fs');
const fs = require('fs');
const { uploadArr } = require('../middlewares/upload');
const { uploadSingle } = require('../middlewares/uploadSingle');
const validateAccessToken = require('../middlewares/validateAccess');
const multer = require('multer');
const upload = multer();
const gm = require('gm');

const { createAlbum, 
  findAlbumById, 
  findAllUserAlbums, 
  getAlbumNameById, 
  addPhotoToAlbum, 
  replacePhotoWhithOtherOne,
  getEl} = require('../controllers/cont_album');


// const watermark = '../public/images/assets/watermark.png';
// const pathTo = `../public/images/photo/61863b60975ec987a6d41f99_1636308992813.jpeg`;
// const pathFrom = pathTo;

// gm(pathFrom).
// draw(['image Over 0,0 0,0 "'+watermark+'"']).
// write(pathTo, function (err) {
//   console.log("GM ERR: ", err);
// });
/* User panel control. */

router.get('/', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  console.log('JOE auth: ', auth);
  if(auth) {
    const { name, uid } = auth;
    const albumList = await findAllUserAlbums(uid);
    return res.render('pages/albumList', { auth: { uid, name }, payload: albumList, content: 'albumList' });
  } else {
    return res.render('index', {auth: false});
  };
});
router.get('/albumForm', validateAccessToken, (req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    res.render('pages/albumForm', { auth: { uid, name }, content: 'albumForm' })
  }
});
router.post('/newAlbum', upload.none(), validateAccessToken,  async (req, res) => {
  console.log("new album: ", req.body);
  const doc = await createAlbum(req.body);
  res.send({status: 'ok', payload: doc});
});
router.get('/albumList', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    const albumList = await findAllUserAlbums(uid);
    return res.render('pages/albumList', { auth: { uid, name }, content: 'albumList', payload: albumList });
  }
});
router.get('/album/:id', validateAccessToken, async (req, res) => {
  // console.log('GET ELL:  ', await getEl())
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    const albumID = req.params.id;
    const album = await findAlbumById(albumID);
    console.log("ALBUM: ", album);
    res.render('pages/album', { auth: { albumName: album.name, albumID, name, uid }, content: 'album', photos: album.photos});
  }
});

router.get('/userProfile', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    res.render('pages/userProfile', { auth: { name, uid }, content: 'userProfile'});
  }
});

router.post('/sendPhotos', uploadArr, async (req, res) => {
  const { photoPath } = req.params;
  
  const photoLinks = photoPath.split(',').slice(1);
  const folder = '/images/photo/';
  const photoArr = photoLinks.reduce((acc, link) =>  {
    acc.push({ link: folder+link });
    return acc;
  }, []);

  console.log('PHOTOS: ', photoArr);
  const { albumID, albumName, uid, name }= req.body;
  const albumRefresh = await addPhotoToAlbum(albumID, photoArr);
  const album = await findAlbumById(albumID);
  res.render('pages/album', { auth: { albumName: album.name, albumID, name, uid }, content: 'album', photos: album.photos});

});

router.post('/replacePhoto', uploadSingle, async (req, res) => {
  console.log("AVATAR: ", req.params.photoPath);
  console.log('Replace Data: ', req.body);
  const { photoPath: newPhotoPath } = req.params;
  if(newPhotoPath) {
    const { albumID, photoID, photoSrc} = req.body;
    fs.unlink(`public${photoSrc}`, (err) => {
      if(err) {
        console.log(`REMOVE file ${photoSrc}: `, err );
        return;
      }
    });
    const doc = await replacePhotoWhithOtherOne(albumID, photoID, newPhotoPath);
    console.log('DOC REPL: ', doc);
    doc ? res.json({status: 'ok'}) : res.json({status: 'err'})
  }
})


module.exports = router;
