const mongoose = require("mongoose");

const translationSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  targetLanguage: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});

const Translation = mongoose.model("Translation", translationSchema);

module.exports = Translation;
