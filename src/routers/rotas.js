const express = require("express");
const newsletter = require("../controllers/newsletter");

const rotas = express();

rotas.post("/emails", newsletter.cadastrarEmail);
rotas.post("/newsletter", newsletter.enviarNewsletter);
module.exports = rotas;
