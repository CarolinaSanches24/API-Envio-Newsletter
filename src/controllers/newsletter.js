const knex = require("../config/connectionPostgres");

const cadastrarEmail = async (req, res) => {
  const { nome, email } = req.body;

  try {
    const emailExiste = await knex("emails").where({ email }).first();
    if (emailExiste) {
      return res.status(400).json("O email já existe");
    }
    const newEmail = await knex("emails").insert({ nome, email });

    return res.status(201).json({ mensagem: "Cadastro efetuado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

const enviarNewsletter = async (req, res) => {
  const { texto } = req.body;
  try {
    return res.status(200).json({ mensagem: "Continuar amanhã" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

module.exports = {
  cadastrarEmail,
  enviarNewsletter,
};
