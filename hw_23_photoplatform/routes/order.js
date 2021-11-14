const express = require('express');
const router = express.Router();
const { 
  createOrder,
  getOrderById,
  updateMerchant,
  getLinkForPay
} = require('../controllers/cont_order');
const { getAllPhotosFormAlbum } = require('../controllers/cont_album');
const { initWayForPay } = require('../controllers/cont_wayforpay');
router.post('/sendOrder', async (req, res) => {
  const {photos, albumID, photographer} = req.body;
  const {photos: albumPhotos} = await getAllPhotosFormAlbum(albumID);

  const photosForOrder = photos.
    map(item => {
      const photoFromAlbum = albumPhotos.
      find(photo => photo._id.toString() === item.photoID);
      const { price, link } = photoFromAlbum;
      const newPhotoItem = {
        photoID: item.photoID,
        link, 
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

  const order = await createOrder(orderObj);
  res.send({status: 'ok',  payload: { orderID: order._id } });
});

router.get('/confirmOrder/:id', async (req, res) => {
  const orderID = req.params.id;
  const order = await getOrderById(orderID);
  res.render('pages/confirmOrder', { order })
});

router.get('/getPayForm/:id', async (req, res) => {
  const orderID = req.params.id;
  const order = await getOrderById(orderID);
  const responseWayForPay = await initWayForPay(order);
  console.log("RESP WAY 4 PAY: ",responseWayForPay);
  if(!responseWayForPay.invoiceUrl && !responseWayForPay.reasonCode !== 1112) {
    res.send({ status: 'error', message: responseWayForPay.reason });
  }else if(!responseWayForPay.invoiceUrl && responseWayForPay.reasonCode === 1112) {
    const linkForPay = order.merchant.invoiceUrl;
    res.send({status: 'ok', payload: linkForPay});
  }else {
    res.send({status: 'ok', payload: responseWayForPay.invoiceUrl})
  }
});

module.exports = router;