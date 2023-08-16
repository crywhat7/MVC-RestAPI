const express = require("express");
const cors = require("cors");

// Rutas Import
const personasRoutes = require("./routes/personas.routes.js");

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

// Rutas
app.use("/personas", personasRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
