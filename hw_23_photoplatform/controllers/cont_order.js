const OrderModel = require('../models/order');

const createOrder = async (userOrder) => {
  if(!userOrder.photos) return false;
  const order = new OrderModel;
  order.photographer = userOrder.photographer;
  order.albumID = userOrder.albumID;
  order.photos = userOrder.photos;
  order.currency = userOrder.currency;
  order.generalSum = userOrder.generalSum;
  let doc = await order.save();
  console.log(doc);
  return doc;
};

const getOrderById = async (id) => {
  const order = await OrderModel.findOne({ _id: id });
  return order;
};
const updateMerchant = async (orderID, merchant) => {
  const order = await OrderModel.updateOne({_id: orderID}, {$set: {merchant: merchant}});
  return order;
};
const getLinkForPay = async (orderID) => {
  const link = await OrderModel.findOne({_id: orderID}, {"merchant.invoiceUrl": 1, _id: 0});
  return link;
}


module.exports = {
  createOrder,
  getOrderById,
  updateMerchant,
  getLinkForPay
};
