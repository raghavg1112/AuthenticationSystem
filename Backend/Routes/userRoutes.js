const express = require("express");
const { userAuthorisation } = require("../Middlewares/userAuthorisationMid");
const userController = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.post("/auth/signUp", userController.signUp);
userRouter.post("/auth/login", userController.login);
userRouter.post("/auth/forgotPassword", userController.forgotPassword);
userRouter.get("/auth/otpVerification", userController.otpVerification);

userRouter.post(
  "/resetPassword",
  userAuthorisation,
  userController.resetPassword
);

userRouter.get(
  "/data/profileView",
  userAuthorisation,
  userController.profileView
);

module.exports = userRouter;
