var express = require('express');
var router = express.Router();
const { uploadArr } = require('../middlewares/upload');
const validateAccessToken = require('../middlewares/validateAccess');

const albumFormComponent = require('../components/albumForm');

/* User panel control. */
router.get('/', validateAccessToken, (req, res) => {
  const { auth } = req.params;
  console.log('JOE auth: ', auth);
  if(auth) {
    const { name, uid } = auth;
    return res.render('userPanel', { auth: { uid, name } })
  } else {
    return res.render('index', {auth: false});
  };
});
router.get('/albumForm', validateAccessToken, (req, res) => {
  // res.render('createAlbum')
  res.send({status: 'ok', payload: {component: albumFormComponent}})
})

module.exports = router;
