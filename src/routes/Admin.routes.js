const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const {
  adminReadAll,
  adminRead,
  adminRegister,
  adminActualize,
  adminEliminate,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Operaciones relacionadas con administradores
 */

/**
 * @swagger
 * /app/v1/admin:
 *   get:
 *     summary: Obtiene todos los administradores
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de administradores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Admin'
 */

/**
 * @swagger
 * /app/v1/admin/{id}:
 *   get:
 *     summary: Obtiene un administrador por su ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del administrador
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Detalles del administrador
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: Administrador no encontrado
 */

/**
 * @swagger
 * /app/v1/admin:
 *   post:
 *     summary: Registra un nuevo administrador
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       201:
 *         description: Administrador creado exitosamente
 */

/**
 * @swagger
 * /app/v1/admin/{id}:
 *   patch:
 *     summary: Actualiza un administrador por su ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del administrador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Administrador actualizado exitosamente
 *       404:
 *         description: Administrador no encontrado
 */

/**
 * @swagger
 * /app/v1/admin/{id}:
 *   delete:
 *     summary: Elimina un administrador por su ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del administrador
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Administrador eliminado exitosamente
 *       404:
 *         description: Administrador no encontrado
 */

router.get("/admin", authenticate, adminReadAll);
router.get("/admin/:id", authenticate, adminRead);
router.post("/admin", adminRegister);
router.patch("/admin/:id", authenticate, adminActualize);
router.delete("/admin/:id", authenticate, adminEliminate);

module.exports = router;
