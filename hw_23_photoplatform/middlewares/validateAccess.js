const { verifyAccessToken, decodeAccessToken, checkRefreshToken } = require('../controllers/ctrl_jwt');

const validateAccessToken = async (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  const isValid = accessToken ? await verifyAccessToken(accessToken) : null;
  console.log('VALIDATE ACCESS TOKEN: ', isValid);
  if(isValid) {
    const decodeToken = decodeAccessToken(accessToken);
    const parsePayload = JSON.parse(decodeToken.payload);
    const userExp = parsePayload.exp;
    const now = new Date().valueOf();
    const diff = now - userExp;
    decodeToken.payload = parsePayload;
    if(diff > 000) {
      const checkedToken = await checkRefreshToken(refreshToken);
      console.log("TokenDOC: ", checkedToken);
      checkedToken ? 
        req.params.auth =  parsePayload  : 
        req.params.auth = null ;
    }else{
      req.params.auth = parsePayload
    };
    // console.log("DECODE TOKEN: ", decodeToken);
    // req.params = decodeToken;
  };
  next();
};

module.exports = validateAccessToken;