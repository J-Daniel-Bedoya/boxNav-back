const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  PortsBadReadAll,
  PortsBadRead,
  PortsBadRegister,
  PortsBadActualize,
  PortsBadEliminate,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: PortsBad
 *   description: Operaciones relacionadas con puertos problemáticos
 */

/**
 * @swagger
 * /api/v1/port:
 *   get:
 *     summary: Obtiene todos los puertos problemáticos
 *     tags: [PortsBad]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de puertos problemáticos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PortsBad'
 */

/**
 * @swagger
 * /api/v1/port/{id}:
 *   get:
 *     summary: Obtiene un puerto problemático por su ID
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del puerto problemático
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del puerto problemático
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PortsBad'
 *       404:
 *         description: Puerto problemático no encontrado
 */

/**
 * @swagger
 * /api/v1/port:
 *   post:
 *     summary: Registra un nuevo puerto problemático
 *     tags: [PortsBad]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PortsBad'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Puerto problemático creado exitosamente
 */

/**
 * @swagger
 * /api/v1/port/{id}:
 *   patch:
 *     summary: Actualiza un puerto problemático por su ID
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del puerto problemático
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PortsBad'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Puerto problemático actualizado exitosamente
 *       404:
 *         description: Puerto problemático no encontrado
 */

/**
 * @swagger
 * /api/v1/port/{id}:
 *   delete:
 *     summary: Elimina un puerto problemático por su ID
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del puerto problemático
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Puerto problemático eliminado exitosamente
 *       404:
 *         description: Puerto problemático no encontrado
 */

router.get("/port", authenticate, PortsBadReadAll);
router.get("/port/:id", authenticate, PortsBadRead);
router.post("/port", authenticate, PortsBadRegister);
router.patch("/port/:id", authenticate, PortsBadActualize);
router.delete("/port/:id", authenticate, PortsBadEliminate);

module.exports = router;
