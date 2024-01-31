const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DATABASE = process.env.DATABASE;

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log(`Connection established to Database successfully`);
  })
  .catch((err) => {
    console.log(`Failed to connect to Database due to:-      ${err}`);
  });
