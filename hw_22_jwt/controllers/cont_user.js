const UserModel = require('../models/user');

const createUser = async (userData) => {
  const user = new UserModel;
  user.name = userData.name;
  user.auth.login = userData.email;
  user.auth.pwd = userData.password;
  const doc = await user.save();
  console.log(doc._id);
  return doc;
};
const checkUserByEmail = async(data) => {
  const user = await UserModel.findOne({email: data.email});
  console.log("CHECK USER BY EMAIL", user);
  return user;
}; 
const findUserById = async(id) => {
  const user = await UserModel.findOne({id});
  return user;
}

const loginUser = async (email, password) => {
  const user = await UserModel.findOne({"auth.login": email});
  if(!user) {
    return {login: false, message: 'unknown user'};
  }else {
    const check = user.checkPwd(password);
    return {
      login: check, 
      message: check ? 'login successful' : 'login failed, unknown user or password', 
      userID: user._id || null
    };
  }
};



module.exports = {
  createUser,
  loginUser,
  checkUserByEmail,
  findUserById
};
