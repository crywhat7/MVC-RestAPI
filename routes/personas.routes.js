const express = require("express");
const router = express.Router();

const {
  getPersona,
  getPersonas,
  createPersona,
} = require("../controllers/personas.controller.js");

router.get("/", getPersonas);

router.get("/:id", getPersona);

router.post("/", createPersona);

module.exports = router;
