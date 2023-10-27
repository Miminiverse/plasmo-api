const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.trim().length > 0;
      },
      message: "Word cannot be empty.",
    },
  },
  targetLanguage: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
  },
});

const Translation = mongoose.model("Translation", translationSchema);

module.exports = Translation;
