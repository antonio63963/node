const { verifyAccessToken, decodeAccessToken, checkRefreshToken } = require('../controllers/ctrl_jwt');

const validateAccessToken = async (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  // console.log("VERIFY: ", accessToken);
  const isValid = accessToken ? await verifyAccessToken(accessToken) : null;
  if(isValid) {
    const decodeToken = decodeAccessToken(accessToken);
    const parsePayload = JSON.parse(decodeToken.payload);
    const userExp = parsePayload.exp;
    const now = new Date().valueOf();
    const diff = now - userExp;

    if(diff > 3000) {
      const checkedToken = checkRefreshToken(refreshToken);
      console.log("TokenDOC: ", checkedToken);
      checkedToken ? 
        req.body.auth = decodeToken : 
        req.body.auth = null;
        console.log("DECODE TOKEN: ", decodeToken);
        req.body.auth = decodeToken;
        req.body.auth.payload = parsePayload;
    }
  };
  next();
};

module.exports = validateAccessToken;