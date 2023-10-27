const Translation = require("../models/translation");
const axios = require("axios");

exports.getTranslation = async (req, res) => {
  const { text, targetLanguage } = req.body;
  console.log(text);
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
        text,
        target,
      },
    };
    const response = await axios.request(options);
    console.log(response.data);

    let translate;

    if (response.data[0].result.ori === "en" && target === "en") {
      translate = "";
    } else {
      translate = `${response.data[0].result.text}`;
    }

    res.status(200).json({
      text: text,
      translation: translate,
    });
  } catch {
    res.status(500).json({ error: "Error" });
  }
};

exports.addTranslation = async (req, res) => {};

exports.updateTranslation = async (req, res) => {};

exports.deleteTranslation = async (req, res) => {};
