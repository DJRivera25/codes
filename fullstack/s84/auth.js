const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// ======= Create Access Token ======= //
const createAccessToken = (user) => {
  const data = {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    mobileNo: user.mobileNo,
    isAdmin: user.isAdmin,
  };

  return jwt.sign(data, process.env.JWT_SECRET_KEY, {});
};

// ======= Token Verification Middleware ======= //
const verify = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ auth: "Failed. No or Invalid Token" });
  }

  token = token.slice(7, token.length);

  jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decodedToken) {
    if (err) {
      return res.status(403).send({
        auth: "Failed",
        message: err.message,
      });
    } else {
      req.user = decodedToken;
      console.log("✅ Token verified. User:", req.user);
      next();
    }
  });
};

const verifyAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send({
      auth: "Failed",
      error: "Action Forbidden",
    });
  }
  next();
};
// ======= Exports ======= //
module.exports = {
  createAccessToken,
  verify,
  verifyAdmin,
};
