var express = require('express');
var router = express.Router();
const path = require('path');
const { promises: FS } = require('fs');
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');
const multer = require('multer');
const upload = multer();


const albumFormComponent = require('../components/albumForm');
const { createAlbum, findAlbumById, findAllUserAlbums, getAlbumNameById, addPhotoToAlbum } = require('../controllers/cont_album');

/* User panel control. */

router.get('/', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  console.log('JOE auth: ', auth);
  if(auth) {
    const { name, uid } = auth;
    const albumList = await findAllUserAlbums(uid);
    return res.render('userPanel', { auth: { uid, name }, content: 'albumList', payload: albumList })
  } else {
    return res.render('index', {auth: false});
  };
});
router.get('/albumForm', validateAccessToken, (req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    res.render('userPanel', { auth: { uid, name }, content: 'albumForm' })
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
    return res.render('userPanel', { auth: { uid, name }, content: 'albumList', payload: albumList });
  }
});
router.get('/album/:id', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  if(auth) {
    const { name, uid } = auth;
    const albumID = req.params.id;
    const albumName = await getAlbumNameById(albumID);
    console.log('album Name: ', albumName);
    res.render('userPanel', { auth: { albumName, albumID, name, uid }, content: 'album' });
  }
});

router.get('/userProfile', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  console.log('USERPROFFFF', auth);
  if(auth) {
    const { name, uid } = auth;
    res.render('userPanel', { auth: { name, uid }, content: 'userProfile' });
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
  const { albumID }= req.body;
  addPhotoToAlbum(albumID, photoArr);

});

module.exports = router;
