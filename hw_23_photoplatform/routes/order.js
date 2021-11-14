const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/cont_order');
const { getAllPhotosFormAlbum } = require('../controllers/cont_album')
router.post('/', async (req, res) => {
  const {photos, albumID, photographer} = req.body;
  const {photos: albumPhotos} = await getAllPhotosFormAlbum(albumID);

  const photosForOrder = photos.
    map(item => {
      const photoFromAlbum = albumPhotos.
      find(photo => photo._id.toString() === item.photoID);
      const { price } = photoFromAlbum;
      const newPhotoItem = {
        photoID: item.photoID, 
        amount: item.amount, 
        price,
        sum: price * item.amount
      };
      return newPhotoItem;
    });

  const orderObj = {
    photographer,
    albumID,
    photos: photosForOrder,
    generalSum: photosForOrder.reduce((acc, photo) => {
      acc += photo.sum;
      return acc;
    }, 0)
  };

  console.log('orderObj: ', orderObj);
    const order = await createOrder(orderObj);
    console.log("ALBUM: ", order);
});

module.exports = router;