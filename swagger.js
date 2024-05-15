// importamos las dos depencias que acabamos de instalar
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "NAV Boxes",
      version: "1.0.0",
      description: "Documentación de la api de nav boxes",
    },
  },
  apis: [
    "./src/routes/auth.routes.js",
    "./src/models/Users.models.js",

    "./src/routes/Admin.routes.js",
    "./src/models/Admin.models.js",

    "./src/routes/Town.routes.js",
    "./src/models/Town.models.js",

    "./src/routes/Sectors.routes.js",
    "./src/models/Sectors.models.js",

    "./src/routes/Boxes.routes.js",
    "./src/models/Boxes.models.js",

    "./src/routes/TypeService.routes.js",
    "./src/models/TypeService.models.js",

    "./src/routes/Users.routes.js",
    "./src/models/Users.models.js",

    "./src/routes/PortsBad.routes.js",
    "./src/models/PortsBad.models.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Documentacion disponible en https//:localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
