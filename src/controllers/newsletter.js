const transportador = require("../config/connectionNodemailer");
const knex = require("../config/connectionPostgres");
const compiladorHtml = require("../utils/compiladorHtml");

const cadastrarEmail = async (req, res) => {
  const { nome, email } = req.body;

  try {
    const emailExiste = await knex("emails").where({ email }).first();
    if (emailExiste) {
      return res.status(400).json("O email já existe");
    }
    await knex("emails").insert({ nome, email });

    return res.status(201).json({ mensagem: "Cadastro efetuado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

const enviarNewsletter = async (req, res) => {
  const { texto } = req.body;
  try {
    const emails = await knex("emails");

    for (const email of emails) {
      const htmlNewsletter = await compiladorHtml(
        "./src/templates/newsletter.html",
        {
          usuario: email.nome,
          texto: texto,
        }
      );
      transportador.sendMail({
        from: "Carolina sanches <eucarolinasanches@gmail.com>",
        to: `${email.nome}<${email.email}`,
        subject: "Newsletter Informativo",
        html: htmlNewsletter,
      });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do Servidor" });
  }
};

module.exports = {
  cadastrarEmail,
  enviarNewsletter,
};
