const crypto = require('crypto');
const { merchantSecretKey, url, apiParams } = require('../config/merchant');
const axios = require('axios');

const createSignature = (strData) => {
  const hmac = crypto.createHmac('md5', merchantSecretKey)
    .update(strData)
    .digest('hex');
  return hmac;
};


const createInvoice = (apiParams, order) => {
  const { merchantDominName, merchantAccount, apiVersion, language } = apiParams;
  const { _id: orederID, sum } = order;
  const data = {
    transactionType: 'CREATE_INVOICE',
    merchantAccount,
    merchantDominName,
    apiVersion,
    language,
    orderReference: orderID, // only timestamp
    orderDate: new Date.now(), 
    orderTimeout: 60*60*24*12,
    amount:0
  }
}