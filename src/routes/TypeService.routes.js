const { Router } = require("express");
const router = Router();
const authenticate = require("../middlewares/auth.middleware");

const {
  serviceReadAll,
  serviceRead,
  serviceRegister,
  serviceActualize,
  serviceEliminate,
} = require("../controllers");

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Operaciones relacionadas con servicios
 */

/**
 * @swagger
 * /api/v1/service:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtiene todos los servicios
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: Lista de servicios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TypeService'
 */

/**
 * @swagger
 * /api/v1/service/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtiene un servicio por su ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del servicio
 *     responses:
 *       200:
 *         description: Detalles del servicio
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TypeService'
 *       404:
 *         description: Servicio no encontrado
 */

/**
 * @swagger
 * /api/v1/service:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Registra un nuevo servicio
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeService'
 *     responses:
 *       201:
 *         description: Servicio creado exitosamente
 */

/**
 * @swagger
 * /api/v1/service/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Actualiza un servicio por su ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del servicio
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TypeService'
 *     responses:
 *       200:
 *         description: Servicio actualizado exitosamente
 *       404:
 *         description: Servicio no encontrado
 */

/**
 * @swagger
 * /api/v1/service/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Elimina un servicio por su ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int32
 *         description: ID del servicio
 *     responses:
 *       200:
 *         description: Servicio eliminado exitosamente
 *       404:
 *         description: Servicio no encontrado
 */

router.get("/service", authenticate, serviceReadAll);
router.get("/service/:id", authenticate, serviceRead);
router.post("/service", authenticate, serviceRegister);
router.patch("/service/:id", authenticate, serviceActualize);
router.delete("/service/:id", authenticate, serviceEliminate);

module.exports = router;
