const OrderModel = require('../models/order');

const createOrder = async (userOrder) => {
  const order = new OrderModel;
  order.photographer = userOrder.uid;
  order.photos = userOrder.photos;
  order.currency = userOrder.currency;
  order.sum = userOrder.photos
  const doc = await order.save();
  console.log(doc._id);
  return doc;
};



module.exports = {
  
};
