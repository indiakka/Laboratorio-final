//Importación de dependencias
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

//Creación de la aplicacion
const app = express();

app.use(cors());

//se definen las rutas de la aplicación
const indexRouter = require("./routes/index");
const personasRouter = require("./routes/personas");

//Se configura el módulo para generar un log de las peticiones que recibe el servidor y verlas por la consola
app.use(logger("dev"));
//Se configura un middleware para que traduzca todas las peticiones de tipo JSON para facilitar su tratamiento.
app.use(express.json());

//middleware para decodificar el contenido de los parámetros que vengan codificados en las peticiones
app.use(express.urlencoded({ extended: false }));
//módulo para facilitar el tratamiento de cookies
app.use(cookieParser());
//módulo para facilitar el tratamiento de los recursos estáticos
app.use(express.static(path.join(__dirname, "public")));

//se definen las rutas de la aplicación
app.use("/", indexRouter);
app.use("/personas", personasRouter);

// app.listen(3000, () => "listening on port 3000");

//se exporta la aplicación para que pueda ser utilizada desde otros ficheros que incluyan app.js
module.exports = app;
