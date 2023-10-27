const express = require("express");

const {
  getTranslation,
  addTranslation,
  updateTranslation,
  deleteTranslation,
} = require("../controllers/translation");

const router = express.Router();

router.route("/").post(getTranslation);
router
  .route("/:translationId")
  .patch(updateTranslation)
  .delete(deleteTranslation);

module.exports = router;
