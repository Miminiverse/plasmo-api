const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const DB = process?.env?.DATABASE?.replace(
  "<password>",
  `${process?.env?.DATABASE_PASSWORD}`
);

mongoose.set("strictQuery", true);

const PORT = process?.env?.PORT_CONFIG || 8001;

const listener = async () => {
  if (!DB) {
    console.log("A connection string is required to connect to the DB");
    return;
  }
  try {
    await mongoose.connect(DB);
    const server = app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

listener();
