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
 * /api/v1/box/{boxId}/port:
 *   get:
 *     summary: Obtiene todos los puertos problemáticos de una caja específica
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: boxId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
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
 * /api/v1/box/{boxId}/port/{id}:
 *   get:
 *     summary: Obtiene un puerto problemático por su ID en una caja específica
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: boxId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
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
 * /api/v1/box/{boxId}/port:
 *   post:
 *     summary: Registra un nuevo puerto problemático en una caja específica
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: boxId
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
 *             $ref: '#/components/schemas/PortsBad'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Puerto problemático creado exitosamente
 */

/**
 * @swagger
 * /api/v1/box/{boxId}/port/{id}:
 *   patch:
 *     summary: Actualiza un puerto problemático por su ID en una caja específica
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: boxId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
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
 * /api/v1/box/{boxId}/port/{id}:
 *   delete:
 *     summary: Elimina un puerto problemático por su ID en una caja específica
 *     tags: [PortsBad]
 *     parameters:
 *       - in: path
 *         name: boxId
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID de la caja
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

router.get("/box/:id/port", authenticate, PortsBadReadAll);
router.get("/box/:id/port/:id", authenticate, PortsBadRead);
router.post("/box/:id/port", authenticate, PortsBadRegister);
router.patch("/box/:id/port/:id", authenticate, PortsBadActualize);
router.delete("/box/:id/port/:id", authenticate, PortsBadEliminate);

module.exports = router;
