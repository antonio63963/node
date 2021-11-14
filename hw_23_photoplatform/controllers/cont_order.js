const OrderModel = require('../models/order');

const createOrder = async (userOrder) => {
  if(!userOrder.photos) return false;
  const order = new OrderModel;
  order.photographer = userOrder.uid;
  order.albumID = userOrder.albumID;
  order.photos = userOrder.photos;
  order.currency = userOrder.currency;
  order.generalSum = userOrder.generalSum;
  let doc = await order.save();
  console.log(doc);
  return doc;
};



module.exports = {
  createOrder
};
