const GroupModel = require('../models/group');

const insertGroup = async (userData) => {
  const group = new GroupModel;
  group.name = userData.name;
  
  const doc = await group.save();
  console.log(doc._id);
  return doc;
};

module.exports = {
  insertGroup,
}