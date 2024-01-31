const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

require("./config/db");
const userRouter = require("./Routes/userRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use("/user", userRouter);

app.listen(PORT || 9000, () => {
  console.log(`Server is running successfully`);
});
