const  express = require('express');
const  router = express.Router();
const { uploadArr } = require('../middlewares/upload');
const { findAlbumForLink } = require('../controllers/cont_album');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('Byer link: ', id)
  const album = await findAlbumForLink(id);
  console.log("LINK albom: ", album.createdAt);
  if(album) {
    const { photos, author, name, description, createdAt } = album;
    console.log('createdAt: ', createdAt);
    return res.render('pages/albumLink', { 
      photos, 
      author, 
      albumID: id, 
      name, 
      description,
      eventDate: createdAt
    })
  }
});

module.exports = router;