const express = require("express");
const app = express();
const cors = require("cors");
const favicon = require("express-favicon");
const translationRouter = require("./routes/translation");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

// routes
app.use("/api/v1/translation", translationRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);
module.exports = app;
