const GroupModel = require('../models/group');

const insertGroup = async (userData) => {
  const group = new GroupModel;
  group.name = userData.name;
  group.category = userData.category;
  const doc = await group.save();
  console.log(doc._id);
  return doc;
};

module.exports = {
  insertGroup,
}