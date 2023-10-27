const express = require("express");
const app = express();
const cors = require("cors");
const favicon = require("express-favicon");
const translationRouter = require("./routes/translation");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const swaggerDocs = require("./utils/swagger");
const swaggerUi = require("swagger-ui-express");
const PORT = process?.env?.PORT_CONFIG || 8001;
swaggerDocs(app, PORT);
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.get("/", async (req, res) => {
  res.status(200).json({
    success: "Welcome to Translation API",
  });
});
app.use("/api/v1", translationRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
module.exports = app;
