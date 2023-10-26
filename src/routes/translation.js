const express = require("express");

const {
  getTranslation,
  addTranslation,
  updateTranslation,
  deleteTranslation,
} = require("../controllers/translation");

const router = express.Router();

router.route("/").post(getTranslation).post(addTranslation);
router.route("/:wordId").patch(updateTranslation).delete(deleteTranslation);

module.exports = router;
