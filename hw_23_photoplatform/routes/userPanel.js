var express = require('express');
var router = express.Router();
const path = require('path');
const { promises: FS } = require('fs');
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');
const multer = require('multer');
const upload = multer();
const gm = require('gm');

const { createAlbum, findAlbumById, findAllUserAlbums, getAlbumNameById, addPhotoToAlbum } = require('../controllers/cont_album');



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
  console.log("album ID: ", req.params.id);
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
  console.log('USERPROFFFF', auth);
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
  // watermark
// photoArr.forEach(photo => {
//   const watermark = '../public/images/assets/watermark.png';
//   const pathTo = `../public${photo}`;
//   const pathFrom = pathTo;
  
//   gm(pathFrom).
//   gravity('SouthEast').
//   draw(['image Over 0,0 0,0 "'+watermark+'"']).
//   noProfile().
//   write(pathTo, function (err) {
//     console.log("GM ERR: ", err);
//   });
  
// })

  console.log('PHOTOS: ', photoArr);
  const { albumID, albumName, uid, name }= req.body;
  const albumRefresh = await addPhotoToAlbum(albumID, photoArr);
  const album = await findAlbumById(albumID);
  res.render('pages/album', { auth: { albumName: album.name, albumID, name, uid }, content: 'album', photos: album.photos});

});

module.exports = router;
