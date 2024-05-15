const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  sectorsReadAll,
  sectorsRead,
  sectorsRegister,
  sectorsActualize,
  sectorsEliminate,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Sectors
 *   description: Operaciones relacionadas con sectores
 */

/**
 * @swagger
 * /api/v1/sector:
 *   get:
 *     summary: Obtiene todos los sectores
 *     tags: [Sectors]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de sectores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sector'
 */

/**
 * @swagger
 * /api/v1/sector/{id}:
 *   get:
 *     summary: Obtiene un sector por su ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del sector
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del sector
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sector'
 *       404:
 *         description: Sector no encontrado
 */

/**
 * @swagger
 * /api/v1/sector:
 *   post:
 *     summary: Registra un nuevo sector
 *     tags: [Sectors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sector'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Sector creado exitosamente
 */

/**
 * @swagger
 * /api/v1/sector/{id}:
 *   patch:
 *     summary: Actualiza un sector por su ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sector'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sector actualizado exitosamente
 *       404:
 *         description: Sector no encontrado
 */

/**
 * @swagger
 * /api/v1/sector/{id}:
 *   delete:
 *     summary: Elimina un sector por su ID
 *     tags: [Sectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del sector
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sector eliminado exitosamente
 *       404:
 *         description: Sector no encontrado
 */

router.get("/sector", authenticate, sectorsReadAll);
router.get("/sector/:id", authenticate, sectorsRead);
router.post("/sector", authenticate, sectorsRegister);
router.patch("/sector/:id", authenticate, sectorsActualize);
router.delete("/sector/:id", authenticate, sectorsEliminate);

module.exports = router;
