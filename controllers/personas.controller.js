const Persona = require("../models/personas.model.js");

async function getPersona(req, res) {
  const { id } = req.params;
  const persona = await Persona.getPersona(id);
  res.json({ persona });
}

async function getPersonas(_req, res) {
  const personas = await Persona.getPersonas();
  res.json({ personas });
}

async function createPersona(req, res) {
  const body = req.body;

  const persona = await Persona.createPersona(body);

  res.json({ message: "Persona creada", persona });
}

module.exports = {
  getPersona,
  getPersonas,
  createPersona,
};
