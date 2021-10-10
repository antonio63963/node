const ProductModel = require('../models/product');

const craeteProduct = async (userData) => {
  const product = new ProductModel;
  product.type = userData.type;
  product.model = userData.model;
  product.group = userData.group;
  product.isActive = userData.isActive;
  product.isSale = userData.isSale;
  product.img = userData.img;
  product.brand = userData.brand;
  product.price = userData.price;
  product.features = userData.features;
  const doc = await product.save();
  console.log(doc._id);
  return doc;
};
const transformPrice = (price) => {
  const modifyedPrice = price / 100;
  return modifyedPrice + '.00грн';
}
const getAllProducts = async(limit) => {
  const laptops = await ProductModel.find({})
    .limit(limit)
    .populate('properties.brand')
    .populate('group');
  laptops.forEach(laptop => laptop.showPrice = transformPrice(laptop.price));
  // console.log(Object.values(laptops[0])); 
  return laptops;
};
const getOrderName = async(order = -1) => {
  const laptops = await ProductModel.find({})
  .populate('properties.brand')
    .sort({"properties.brand": order})
    .limit(10)
    .populate('group');
    laptops.forEach(laptop => laptop.showPrice = transformPrice(laptop.price));
    console.log(laptops);
  return laptops;
};
const getOrderPrice = async(order = -1) => {
  const laptops = await ProductModel.find({})
    .sort({price: order})
    .limit(10)
    .populate('properties.brand')
    .populate('group');
    laptops.forEach(laptop => laptop.showPrice = transformPrice(laptop.price));
  return laptops;
};
const filterProduct = async (params) => {
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
  const laptops = await ProductModel.find(query)
    .populate('properties.brand');
    console.log('LAPTOPS: ====',laptops);
  return laptops;
}



module.exports = {
  craeteProduct,
  getAllProducts,
  getOrderName,
  getOrderPrice,
  filterProduct
}
