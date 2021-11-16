var express = require('express');
var router = express.Router();
const fs = require('fs');
const { uploadArr } = require('../middlewares/upload');
const { uploadSingle } = require('../middlewares/uploadSingle');
const validateAccessToken = require('../middlewares/validateAccess');
const overlayWatermark = require('../middlewares/jimp');
const multer = require('multer');
const upload = multer();

const { 
  createAlbum, 
  findAlbumById, 
  findAllUserAlbums, 
  addPhotoToAlbum, 
  replacePhotoWhithOtherOne,
  deletePhoto
  } = require('../controllers/cont_album');

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
    const album = await findAlbumById(uid, albumID);
    // console.log("ALBUM: ", album);
    if(album) {
      return res.render('pages/album', { auth: { albumName: album.name, albumID, name, uid }, content: 'album', photos: album.photos});
    }else {
      return res.render('index', {auth: false});
    }
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
  const { albumID, albumName, uid, name, price }= req.body;
  console.log('FIND PRICE', req.body);
  const photoLinks = photoPath.split(',').slice(1);
  const folder = '/images/photo/';
  const photoArr = photoLinks.reduce((acc, link) =>  {
    acc.push({ link: folder+link, price: price });
    return acc;
  }, []);

  console.log('PHOTOS: ', photoArr);
  const albumRefresh = await addPhotoToAlbum(albumID, photoArr);
  const album = await findAlbumById(uid, albumID);
  res.render('pages/album', { auth: { albumName: album.name, albumID, name, uid, price }, content: 'album', photos: album.photos});

});

router.post('/replacePhoto', uploadSingle, async (req, res) => {
  const { photoPath: newPhotoPath } = req.params;
  if(newPhotoPath) {
    const { albumID, photoID, photoSrc} = req.body;
    const doc = await replacePhotoWhithOtherOne(albumID, photoID, newPhotoPath);
    if(doc) {
      fs.unlink(`public${photoSrc}`, (err) => {
        err ? res.json({status: 'ok'}) : res.json({status: 'err'})
      });
    }
    console.log('DOC REPL: ', doc);
  }
});



router.post('/deletePhoto', upload.none(), async (req, res) => {
  const { photoID, photoSrc, albumID } = req.body;
  if(photoID){
    const changeArrPhoto = await deletePhoto(albumID, photoID);
    console.log("deletePhoto: ", changeArrPhoto);
    fs.unlink(`public${photoSrc}`, (err) => {
      err ? res.json({status: 'ok'}) : res.json({status: 'err'})
    });
  };
});

// WATERMARLK=====
// const ORIGINAL_IMAGE = path.resolve('public/images/photo/618912937fbfa75abbf92926_1636543355997.jpeg')


// const LOGO = path.resolve("public/images/assets/photoWall.png");

// const LOGO_MARGIN_PERCENTAGE = 5;

// const FILENAME = path.resolve("public/images/photo/test.jpg");



// overlayWatermark(ORIGINAL_IMAGE, LOGO, LOGO_MARGIN_PERCENTAGE, FILENAME).then(image => image.write(FILENAME));


module.exports = router;
