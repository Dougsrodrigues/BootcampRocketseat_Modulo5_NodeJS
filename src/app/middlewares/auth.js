const jwt = require("jsonwebtoken");
const { promisify } = require("util"); // transforma uma func q utiliza padrao de callback em uma promise
module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  // o token assim : Bearer 123
  //fazemos o slip para pegar somente a segunda parte
  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }
  return next();
};
