const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  boxesReadAll,
  boxesRead,
  boxesRegister,
  boxesActualize,
  boxesEliminate,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Boxes
 *   description: Operaciones relacionadas con cajas
 */

/**
 * @swagger
 * /api/v1/town/:id/box:
 *   get:
 *     summary: Obtiene todas las cajas
 *     tags: [Boxes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de cajas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Boxes'
 */

/**
 * @swagger
 * /api/v1/town/:id/box/{id}:
 *   get:
 *     summary: Obtiene una caja por su ID
 *     tags: [Boxes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles de la caja
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Boxes'
 *       404:
 *         description: caja no encontrada
 */

/**
 * @swagger
 * /api/v1/town/:id/box:
 *   post:
 *     summary: Registra una nueva caja
 *     tags: [Boxes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Boxes'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: caja creada exitosamente
 */

/**
 * @swagger
 * /api/v1/town/:id/box/{id}:
 *   patch:
 *     summary: Actualiza una caja por su ID
 *     tags: [Boxes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Boxes'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: caja actualizada exitosamente
 *       404:
 *         description: caja no encontrada
 */

/**
 * @swagger
 * /api/v1/town/:id/box/{id}:
 *   delete:
 *     summary: Elimina una caja por su ID
 *     tags: [Boxes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: caja eliminada exitosamente
 *       404:
 *         description: caja no encontrada
 */

router.get("/box", authenticate, boxesReadAll);
router.get("/box/:id", authenticate, boxesRead);
router.post("/box", authenticate, boxesRegister);
router.patch("/box/:id", authenticate, boxesActualize);
router.delete("/box/:id", authenticate, boxesEliminate);

module.exports = router;
