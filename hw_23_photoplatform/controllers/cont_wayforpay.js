const crypto = require('crypto');
const { merchantSecretKey, url, apiParams } = require('../config/merchant');
const axios = require('axios');

const createSignature = (strData) => {
  const hmac = crypto.createHmac('md5', merchantSecretKey)
    .update(strData)
    .digest('hex');
  return hmac;
};


const createInvoice = (order) => {
  const { merchantDomainName, merchantAccount, apiVersion, language } = apiParams;
  const { _id: orderID, generalSum, currency, photos } = order;
  const data = {
    transactionType: 'CREATE_INVOICE',
    merchantAccount,
    merchantDomainName,
    apiVersion,
    language,
    orderReference: orderID.toString(), 
    orderDate: Date.now(), // only timestamp
    orderTimeout: 60*60*24*12,
    amount: generalSum,
    currency,
    productName: photos.map(photo => photo._id.toString()),
    productPrice: photos.map(photo => photo.price),
    productCount: photos.map(photo => photo.amount)
  };
  
  // create string for signature
  const strData = Object.values(data)
  .map(item => Array.isArray(item) ?
    item.join(';') :
    item
  ).join(';');
  console.log('strData: ', strData);

  // add merchantSignature
  data.merchantSignature = createSignature(strData);
  return data;
};

const initWayForPay = async (order) => {
  const data = createInvoice(order);
  console.log('DATA: ', data);
  const responseWayForPay = await axios.post(url, data);
  return responseWayForPay.data;
}
module.exports = {
  initWayForPay
}