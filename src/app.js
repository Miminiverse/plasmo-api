const express = require("express");
const app = express();
const cors = require("cors");
const favicon = require("express-favicon");
const translationRouter = require("./routes/translation");
// import { NODE_ENV } from './config';

// Trusts the first proxy in front of the app. Useful when deployed behind a proxy
// to accurately get the client's IP from the X-Forwarded-For header.
app.set("trust proxy", 1);

// slack router should be used before json and urlencoded middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

// routes
app.use("/api/v1/translation", translationRouter);

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);
module.exports = app;
