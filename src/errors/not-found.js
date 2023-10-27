const CustomAPIError = require("./custom-api");

class NotFoundError extends CustomAPIError {
  statusCode;

  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
