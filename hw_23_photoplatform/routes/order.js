const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/cont_order');
const { getAllPhotosFormAlbum } = require('../controllers/cont_album')
router.post('/', async (req, res) => {
  console.log("ORDER: ", req.body);
  const {photos, albumID, photographer} = req.body;
  const clientChooser = photos.map(photo => photo.photoID);
  const {photos: albumPhotos} = await getAllPhotosFormAlbum(albumID);
  console.log("album fotos: ", albumPhotos);
  const photosForOrder =  clientChooser.
  map(photoID => albumPhotos.
    find(photo => photo._id.toString() === photoID));
    // const order = await createOrder(req.body);
    // console.log("ORDER res: ", order);
    console.log("ALBUM: ", photosForOrder);
});

module.exports = router;