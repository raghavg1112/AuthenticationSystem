const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const userAuthorisation = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "User not Authorised.Please login first!!",
      errorCode: 401,
      data: null,
    });
  }

  const SECRETKEY = process.env.SECRETKEY;
  const checkToken = jwt.verify(token, SECRETKEY);

  if (!checkToken) {
    return res.status(401).json({
      success: false,
      message: "Please login again!!",
      errorCode: 401,
      data: null,
    });
  }

  const user = User.findOne({ email: checkToken.email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "User Exists no more!Please regsiter",
      errorCode: 401,
      data: null,
    });
  }
  next();
};

module.exports = { userAuthorisation };
