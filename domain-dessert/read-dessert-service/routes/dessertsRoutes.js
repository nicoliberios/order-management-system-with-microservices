const express = require('express');
const dessertsController = require('../controllers/dessertsController');

const router = express.Router();


/**
 * @swagger
 * /api/desserts:
 *   get:
 *     summary: Returns a list of desserts
 *     tags: [Desserts]
 *     responses:
 *       200:
 *         description: List of desserts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Dessert ID
 *                   name:
 *                     type: string
 *                     description: Name of the dessert
 *                   description:
 *                     type: string
 *                     description: Description of the dessert
 *       500:
 *         description: Error reading the desserts data
 */
router.get('/desserts', dessertsController.listDesserts);
router.get('/desserts/:id', dessertsController.getDessertById);

module.exports = router;
