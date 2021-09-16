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
  const modifyedPrice = price /100;
  return modifyedPrice;
}
const getAllLaptops = async(limit) => {
  const laptops = await LaptopModel.find({}).sort({price: 1}).limit(limit);
  laptops.price = transformPrice(laptops.price);
  return laptops;
}

module.exports = {
  insertLaptop,
  getAllLaptops
}
