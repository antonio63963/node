var express = require('express');
var router = express.Router();
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');

/* User panel control. */
router.get('/', validateAccessToken, (req, res) => {
  if(req.body.auth) {
    const { payload } = req.body.auth;
    console.log('PANEL DATA: ', payload);
    const { name, uid } = payload;
    res.render('userPanel', {uid, name})
  }
  res.render('index', {auth: false});
});
router.get('/albumForm', validateAccessToken, (req, res) => {
  res.render('createAlbum')
})

module.exports = router;
