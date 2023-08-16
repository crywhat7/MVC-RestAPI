const personas = require("../mockups/personas");

class Persona {
  static async getPersonas() {
    return personas;
  }

  static async getPersona(id) {
    return personas.find((persona) => persona.id === Number(id));
  }

  static async createPersona(persona) {
    personas.push(persona);
    return persona;
  }
}

module.exports = Persona;
