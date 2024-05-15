const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  townReadAll,
  townRead,
  townRegister,
  townActualize,
  townEliminate,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Towns
 *   description: Operaciones relacionadas con municipios
 */

/**
 * @swagger
 * /api/v1/town:
 *   get:
 *     summary: Obtiene todos los municipios
 *     tags: [Towns]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de municipios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Town'
 */

/**
 * @swagger
 * /api/v1/town/{id}:
 *   get:
 *     summary: Obtiene un municipio por su ID
 *     tags: [Towns]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del municipio
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del municipio
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Town'
 *       404:
 *         description: Municipio no encontrado
 */

/**
 * @swagger
 * /api/v1/town:
 *   post:
 *     summary: Registra un nuevo municipio
 *     tags: [Towns]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Town'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Municipio creado exitosamente
 */

/**
 * @swagger
 * /api/v1/town/{id}:
 *   patch:
 *     summary: Actualiza un municipio por su ID
 *     tags: [Towns]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del municipio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Town'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Municipio actualizado exitosamente
 *       404:
 *         description: Municipio no encontrado
 */

/**
 * @swagger
 * /api/v1/town/{id}:
 *   delete:
 *     summary: Elimina un municipio por su ID
 *     tags: [Towns]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del municipio
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Municipio eliminado exitosamente
 *       404:
 *         description: Municipio no encontrado
 */

router.get("/town", authenticate, townReadAll);
router.get("/town/:id", authenticate, townRead);
router.post("/town", authenticate, townRegister);
router.patch("/town/:id", authenticate, townActualize);
router.delete("/town/:id", authenticate, townEliminate);

module.exports = router;
