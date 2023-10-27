const express = require("express");

const {
  fetchTranslation,
  createTranslation,
  updateTranslation,
  deleteTranslation,
} = require("../controllers/translation");

const router = express.Router();
/**
 * @swagger
 * /translation:
 *   get:
 *     summary: get translations
 *     tags: [Translation]
 *     responses:
 *       '200':
 *         description: Successful
 *       '401':
 *         description: Unauthorized
 */
/**
 * @swagger
 * /translation:
 *   post:
 *     summary: create translation
 *     tags: [Translation]
 *     responses:
 *       '201':
 *         description: Successful
 *       '401':
 *         description: Unauthorized
 */
/**
 * @swagger
 * /translation/:translationId:
 *   patch:
 *     summary: update translation
 *     tags: [Translation]
 *     responses:
 *       '201':
 *         description: Successful
 *       '401':
 *         description: Unauthorized
 */
/**
 * @swagger
 * /translation/:translationId:
 *   delete:
 *     summary: delete translation
 *     tags: [Translation]
 *     responses:
 *       '200':
 *         description: Successful
 *       '401':
 *         description: Unauthorized
 */
router.route("/translation").post(createTranslation).get(fetchTranslation);
router
  .route("/translation/:translationId")
  .patch(updateTranslation)
  .delete(deleteTranslation);

module.exports = router;
