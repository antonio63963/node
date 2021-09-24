const LaptopModel = require('../models/laptop');

const insertLaptop = async (userData) => {
  const laptop = new LaptopModel;
  laptop.model = userData.model;
  laptop.group = userData.group;
  laptop.isActive = userData.isActive;
  laptop.isSale = userData.isSale;
  laptop.img = userData.img;
  laptop.properties = {
    brand: userData.brand,
    diagonal: userData.diagonal,
    processor: userData.processor
  };
  laptop.price = userData.price;
  const doc = await laptop.save();
  console.log(doc._id);
  return doc;
};
const transformPrice = (price) => {
  const modifyedPrice = price / 100;
  return modifyedPrice + '.00грн';
}
const getAllLaptops = async(limit) => {
  const laptops = await LaptopModel.find({})
    .limit(limit)
    .populate('properties.brand')
    .populate('group');
  laptops.forEach(laptop => laptop.showPrice = transformPrice(laptop.price));
  console.log(Object.values(laptops[0])); 
  return laptops;
};
const getOrderName = async(order = -1) => {
  const laptops = await LaptopModel.find({})
  .populate('properties.brand')
    .sort({"properties.brand": order})
    .limit(10)
    .populate('group');
    laptops.forEach(laptop => laptop.showPrice = transformPrice(laptop.price));
    console.log(laptops);
  return laptops;
};
const getOrderPrice = async(order = -1) => {
  const laptops = await LaptopModel.find({})
    .sort({price: order})
    .limit(10)
    .populate('properties.brand')
    .populate('group');
    laptops.forEach(laptop => laptop.showPrice = transformPrice(laptop.price));
  return laptops;
};
const filterLaptop = async (params) => {
  console.log(params);
  const query = {};
  Object.keys(params).forEach(key => {
    if(Array.isArray(params[key])) {
      query[`properties.${key}`] = {$in: params[key]};
    }else {
      query[`properties.${key}`] = params[key];
    }
  });
console.log("query", query);
  const laptops = await LaptopModel.find(query)
    .populate('properties.brand');
    console.log('LAPTOPS: ====',laptops);
  return laptops;
}



module.exports = {
  insertLaptop,
  getAllLaptops,
  getOrderName,
  getOrderPrice,
  filterLaptop
}
