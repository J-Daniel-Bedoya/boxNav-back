const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  usersReadAll,
  usersRead,
  usersRegister,
  usersActualize,
  usersEliminate,
  userSearch,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Registra un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       401:
 *         description: No autorizado, token no válido o no proporcionado
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Actualiza un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       401:
 *         description: No autorizado, token no válido o no proporcionado
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/v1/user/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Elimina un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       401:
 *         description: No autorizado, token no válido o no proporcionado
 *       404:
 *         description: Usuario no encontrado
 */
/**
 * @swagger
 * /api/v1/user/search:
 *   get:
 *     summary: Busca usuarios por nombre
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Parte del nombre del usuario a buscar
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 */

router.get("/user", authenticate, usersReadAll);
router.get("/user/:id", authenticate, usersRead);
router.post("/user", authenticate, usersRegister);
router.put("/user/:id", authenticate, usersActualize);
router.delete("/user/:id", authenticate, usersEliminate);
router.get("user/search", authenticate, userSearch);

module.exports = router;
