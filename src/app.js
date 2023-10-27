const express = require("express");
const app = express();
const cors = require("cors");
const favicon = require("express-favicon");
const translationRouter = require("./routes/translation");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

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

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
module.exports = app;
