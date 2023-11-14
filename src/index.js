require("dotenv").config();

const express = require("express");
const rotas = require("./routers/rotas");

const server = express();
server.use(express.json());

server.use(rotas);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Servidor ouvindo a porta ${PORT}`);
});
