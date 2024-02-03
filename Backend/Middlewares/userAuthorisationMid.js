const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const userAuthorisation = async (req, res, next) => {
  try {
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
    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      // Handle expired token error
      // Prompt the user to log in again or refresh the token
      // ...

      res.clearCookie("jwt");
      return res.status(401).json({
        success: false,
        message: "Token Expired!!Please login again",
        errorCode: 401,
        data: null,
      });
    } else {
      throw err;
      // Handle other JWT verification errors
      // ...
    }
  }
};

module.exports = { userAuthorisation };
