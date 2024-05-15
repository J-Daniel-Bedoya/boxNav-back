const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { adminLogin, deleteLogout } = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Operaciones de autenticación para administradores
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Inicia sesión de un administrador
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del administrador
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del administrador
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/v1/auth/logout:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Cierra sesión de un administrador
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 *       401:
 *         description: No se pudo cerrar sesión debido a la falta de autenticación
 *       500:
 *         description: Error interno del servidor
 */

router.post("/auth/login", adminLogin);
router.delete("/auth/logout", authenticate, deleteLogout);

module.exports = router;
