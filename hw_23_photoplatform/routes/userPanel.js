var express = require('express');
var router = express.Router();
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');
const multer = require('multer');
const upload = multer();

const albumFormComponent = require('../components/albumForm');
const { createAlbum, findAlbumById, findAllUserAlbums } = require('../controllers/cont_album');

/* User panel control. */

router.get('/', validateAccessToken, async (req, res) => {
  const { auth } = req.params;
  console.log('JOE auth: ', auth);
  if(auth) {
    const { name, uid } = auth;
    const albumList = await findAllUserAlbums(uid);
    console.log("albumList: ", albumList);
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
})


module.exports = router;
