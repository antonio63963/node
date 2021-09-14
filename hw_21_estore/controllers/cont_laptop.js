const LaptopModel = require('../models/laptop');

const insertLaptop = async (userData) => {
  const laptop = new LaptopModel;
  laptop.name = userData.name;
  laptop.group = userData.group;
  laptop.isActive = userData.isActive;
  laptop.isSale = userData.isSale;
  laptop.img = userData.img;
  laptop.properties = {
    brand: userData.brand,
    diagonal: userData.diagonal,
    processor: userData.processor
  }
  const doc = await laptop.save();
  console.log(doc._id);
  return doc;
};

module.exports = {
  insertLaptop
}
