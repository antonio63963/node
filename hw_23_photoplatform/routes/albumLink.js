const  express = require('express');
const  router = express.Router();
const { uploadArr } = require('../middlewares/upload');
const { findAlbumForLink } = require('../controllers/cont_album');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const album = await findAlbumForLink(id);
  console.log("LINK albom: ", album);
  if(album) {
    const { photos, uid, name } = album;
    return res.render('pages/albumLink', { photos, uid, albumID: id, name })
    // res.render('pages/ggg')
  }
});

module.exports = router;