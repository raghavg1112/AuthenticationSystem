const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("./config/db");
const userRouter = require("./Routes/userRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRouter);

app.listen(PORT || 9000, () => {
  console.log(`Server is running successfully`);
});
