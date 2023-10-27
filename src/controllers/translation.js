const Translation = require("../models/translation");
const axios = require("axios");
const { BadRequestError } = require("../errors");

exports.getTranslation = async (req, res) => {
  const { text, targetLanguage } = req.body;
  if (!text || !targetLanguage) {
    throw new BadRequestError("Missing values");
  }

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

    const newTranslation = await Translation.create({
      word: text,
      targetLanguage: target,
      translation: translate,
    });

    res.status(200).json({
      text: text,
      translation: translate,
    });
  } catch {
    res.status(500).json({ error: "Error" });
  }
};

exports.updateTranslation = async (req, res) => {
  const { translationId } = req.params;
  const { text, targetLanguage } = req.body;
};

exports.deleteTranslation = async (req, res) => {
  const { translationId } = req.params;
  const translation = await Translation.findByIdAndRemove({
    _id: translationId,
  });

  if (!translation) {
    throw new BadRequestError("Translation not found");
  }

  res.status(200).json({ status: "Success! Translation removed." });
};
