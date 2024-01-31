const express = require("express");
const { userAuthorisation } = require("../Middlewares/userAuth");
const userController = require("../Controllers/userController");

const userRouter = express.Router();

userRouter.post("/auth/signUp", userController.signUp);
userRouter.post("/auth/login", userController.login);
userRouter.get("/auth/forgotPassword", userController.forgotPassword);
userRouter.get("/auth/otpVerification", userController.otpVerification);

userRouter.post(
  "/resetPassword",
  userAuthorisation,
  userController.resetPassword
);

userRouter.get("/fetchData", userAuthorisation, userController.fetchData);

module.exports = userRouter;
