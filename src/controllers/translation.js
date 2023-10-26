const Translation = require("../models/translation");
const axios = require("axios");

exports.getTranslation = async (req, res) => {
  const { word, targetLanguage } = req.body;
  const target = targetLanguage ? targetLanguage : "en";
  try {
    const options = {
      method: "POST",
      url: process.env.TRANSLATE_URL,
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.TRANSLATE_API_KEY,
        "X-RapidAPI-Host": process.env.API_HOST,
      },
      data: {
        word,
        target,
      },
    };
    const response = await axios.request(options);
    let data = response.data[0].result;

    res.status(201).json({
      word: word,
      translation: data,
    });
  } catch {
    res.status(500).json({ error: "Error" });
  }
};

exports.addTranslation = async (req, res) => {};

exports.updateTranslation = async (req, res) => {};

exports.deleteTranslation = async (req, res) => {};
