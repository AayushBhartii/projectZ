const express = require("express");
const firmController = require("../controller/firmController");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Firms
 *     description: APIs related to firms
 *
 * components:
 *   schemas:
 *     Firm:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the firm
 *         address:
 *           type: string
 *           description: Address of the firm
 *         ownerId:
 *           type: string
 *           description: ID of the firm owner
 *
 * /add-firm:
 *   post:
 *     summary: Add a new firm
 *     tags: [Firms]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Firm'
 *     responses:
 *       201:
 *         description: Firm added successfully
 *       400:
 *         description: Bad request
 *
 * /uploads/{imageName}:
 *   get:
 *     summary: Get uploaded image by name
 *     tags: [Firms]
 *     parameters:
 *       - in: path
 *         name: imageName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the image
 *     responses:
 *       200:
 *         description: Image retrieved successfully
 *
 * /{firmId}:
 *   delete:
 *     summary: Delete a firm by ID
 *     tags: [Firms]
 *     parameters:
 *       - in: path
 *         name: firmId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the firm
 *     responses:
 *       200:
 *         description: Firm deleted successfully
 */

router.post("/add-firm", verifyToken, firmController.addFirm);

router.get("/uploads/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.headersSent("Content-Type", "image/jpeg");
  res.sendFile(path.join(__dirname, "..", "uploads", imageName));
});

router.delete("/:firmId", firmController.deleteFirmById);
// router.get("/search", firmController.searchFirmByName);
router.get("/:firmId", firmController.getFirmById);
router.patch("/update-firm/:firmId", firmController.updateFirm);

router.get("/filter/pure-veg", firmController.pureVegFirms);
router.get("/filter/rating", firmController.filterFirmsByRating);
router.get("/filter/offers", firmController.filterFirmsWithOffers);
router.get("/filter-by-cuisines", firmController.filterFirmsByCuisines);
router.get("/filter-by-dietary", firmController.filterFirmByDietary);
router.get("/sort-by-popularity", firmController.sortFirmsByPopularity);
router.get("/filter-firms", firmController.filterFirms);

module.exports = router;
