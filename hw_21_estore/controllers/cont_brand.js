const BrandModel = require('../models/brand');

const insertBrand = async (userData) => {
  const brand = new BrandModel;
  brand.name = userData.name;
  
  const doc = await brand.save();
  console.log(doc._id);
  return doc;
};

module.exports = {
  insertBrand,
};
