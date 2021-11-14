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
  let data = {
    transactionType: 'CREATE_INVOICE',
    apiVersion,
    language,
    orderTimeout: 60*60*24*12,
  };
  const dataForSingnature = {
    merchantAccount,
    merchantDomainName,
    orderReference: orderID.toString(), 
    orderDate: Date.now(), // only timestamp
    amount: generalSum,
    currency,
    productName: photos.map(photo => photo._id.toString()),
    productCount: photos.map(photo => photo.amount),
    productPrice: photos.map(photo => photo.price)
  }

  // create string for signature
  const strData = Object.values(dataForSingnature)
  .map(item => Array.isArray(item) ?
    item.join(';') :
    item
  ).join(';');
  console.log('strData: ', strData);

  // add merchantSignature
  data.merchantSignature = createSignature(strData);
  data = {...data, ...dataForSingnature}
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