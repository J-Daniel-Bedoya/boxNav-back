const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error");
const initModels = require("./models/initModels.models");
const {
  UsersRoutes,
  BoxesRoutes,
  PortsBadRoutes,
  SectorsRoutes,
  TownRoutes,
  AdminRoutes,
  AuthRoutes,
  TypeServiceRoutes,
} = require("./routes");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((err) => console.log(err));

db.sync({ alter: true })
  .then(() => console.log("Conexión exitosa"))
  .catch((err) => console.log(err));

app.use("/api/v1", AuthRoutes);
app.use("/api/v1", UsersRoutes);
app.use("/api/v1", BoxesRoutes);
app.use("/api/v1", PortsBadRoutes);
app.use("/api/v1", SectorsRoutes);
app.use("/api/v1", TownRoutes);
app.use("/api/v1", AdminRoutes);
app.use("/api/v1", TypeServiceRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Respuesta exitosa",
    description: "Prueba esta API con SWAGGER en el siguiente ruta",
    link: process.env.HOST,
  });
});

app.use(handleError);
module.exports = app;
