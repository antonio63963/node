const BrandModel = require('../models/brand');

const insertBrand = async (userData) => {
  const brand = new BrandModel;
  brand.name = userData.name;
  
  const doc = await brand.save();
  console.log(doc._id);
  return doc;
};
const getAllBrands = async () => {
  const brands = await BrandModel.find({}, {_id: 1, name: 1});
  console.log("GET ALL BRANDS: ", brands);
  return brands;
};

module.exports = {
  insertBrand,
  getAllBrands
};
