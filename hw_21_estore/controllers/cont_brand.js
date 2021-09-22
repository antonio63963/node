const BrandModel = require('../models/brand');

const insertBrand = async (userData) => {
  const brand = new BrandModel;
  brand.name = userData.name;
  brand.group = userData.group;
  const doc = await brand.save();
  console.log(doc._id);
  return doc;
};
const getAllBrands = async () => {
  const brands = await BrandModel.find({}, {_id: 1, name: 1}).sort({name: 1});
  console.log("GET ALL BRANDS: ", brands);
  return brands;
};
const setGroupArr = async (id) => {
 const res = await BrandModel.updateMany({}, {$set: {group: [id]}}, (err, brand) => {
   if(err) console.log("ERROR: ", err);
   if(brand) console.log("BRAND: ", brand);
 });
};
const getBrandsByGroup = async (group_id) => {
  const necessaryBrands = await BrandModel.find({group: {$in: group_id}}).populate('group');
  console.log(necessaryBrands);
  return necessaryBrands;
}

module.exports = {
  insertBrand,
  getAllBrands,
  setGroupArr,
  getBrandsByGroup
};
