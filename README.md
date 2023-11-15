# API-Envio-Newsletter

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20CONCLUIDO&color=GREEN&style=for-the-badge)

Envio de Emails personalizados com Html
<img src="https://sodit.com.br/images/Sodit-email-marketing-bg.jpg" width="100%" height="50%">

# :clipboard: Descrição do Projeto

Consiste em uma API Rest que controla o envio de emails , de forma automatizada.
Oferece conexão com Banco de Dados do PostgresSQL

# Funcionalidades do Projeto

✅ Cadastrar Email<br>
✅ Enviar Email <br>

# :hammer_and_pick: Tecnologias Utilizadas

<div style="display:inline">
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png " width="80px" height="80px" alt="">
<img src = "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" width="80px" height="80px">
<img src = "https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png"  width="80px" height="80px">
<img src = "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"  width="80px" height="80px">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width="80px" height="80px">
<img src="https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?w=422&ssl=1" width="80px" height="80px">

</div>

# 🚀 Inicialização

- npm install **nodemailer**(utilizado para enviar emails de forma fácil e eficiente usando Node.js)
- npm install **express** (processo de criação de servidores web)
- npm install **pg** (conexao ao banco de dados PostgreSQL)
- npm install **knex** (construtor de consultas (query builder))
- npm install **nodemon** (automaticamente reinicia o servidor quando mudanças são detectadas)
- npm install **dotenv** ( gerenciamento variáveis de ambiente)
- npm install **handlebars**(mecanismo de templates para JavaScript que simplifica a geração de HTML).

# Execução do Projeto

O projeto pode ser executado utilizando o <strong style ="color:purple">Insomia</strong>
<br> Através das Rotas Abaixo:

- Cadastrar Email
  <br>
  <strong style="color:green">POST</strong>
  http://localhost:3000/emails

- Enviar Email
  <br>
  <strong style="color:green">POST</strong>
  http://localhost:3000/newsletter

# 🤝Contribuições

Siga os passos abaixo para contribuir:

1. Faça o fork do projeto (https://github.com/CarolinaSanches24/API-Envio-Newsletter)

2. Clone o seu fork para sua maquína (git clone https://github.com/user_name/REPO_NAME.git)

3. Crie uma branch para realizar sua modificação (git checkout -b feature/name_new_feature)

4. Adicione suas modificações e faça o commit (git commit -m "Descreva sua modificação")

5. Push (git push origin feature/name_new_feature)

6. Crie um novo Pull Request

Pronto, agora só aguardar a análise

# :black_nib: Autora

<p>CAROLINA SANCHES</p>

<img src="https://github.com/CarolinaSanches24/API-FINANCAS/blob/master/img/Carolina%20Sanches%20Moraes%20.png?raw=true" width="150px" height="150px">
<p class = "descricao_carol"><b>Professora de Informática</b>, <br>
Desenvolvedora de Software</p>
<br>

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUKZsL///8AZME7eMgAWb7i6fUAXL/Az+oAYsFjj9B1m9QAYMBGgswAVr0AXb8AWr5ZjdBWh80ZbMTO3PCzx+drl9T2+f2Ssd7G1u0dbsXF1e3w9fs2dsfl7ffV4fIocsaApNmowOSMrNyrw+Wbt+AAUryFqNr2AL+0AAADz0lEQVR4nO3ca1+qMACAcZiA5ATMW+a98vT9P+LROkXiNruMLXae/2v1xyOy6QCjCAAAAAAAAAAAAAAAAAAAALBGnPjeiPbkZSJ36/W4qmSQlbIYTTfxyXx72CXBNYpkv4o/mAwDayx7m7hhWoWUWM2afUebcTiJ5UAReDweo1AS5VAZeNyLgXxQhZxrCo/Hou+NsyJ70AXGcS+EnSgifWC8SHxvngXyzlAYhzCeJqmp8FH63r4fE8IUGC+6P9YI3VTxatP9AzFXz/bvCt8b+GNyT2HX5aov3UEVip4xMO3+SBNlxsJp6Xv7fq5amApn3Z/xzQfivAzgW1tUrPSFDwF8SM1zfiDLisUk5KPwREjN5/QpgKnilbhXrmP0uz/bvxPR9jLwEFDgacm7+Ut/c5v53ijLSvHw4WhMB0Xue4usE2U1vOtv03Qy3e+S8PpeCJlVSZKVgcyCAIDfT+SyrI6Ok0+As4+QVbGbHabLxWTRf7qb7YrMa6XIdZpbpX3k2QPzSuyXjV8rk8dd4i1SjG90bs+3SQx1D7yvH5gnt0vlr830ufK06mNYMW2cl8nUm370/laIYmQ4W3covSwaGAob68FZ/1phudOuiLyYDwoPu9FeoSiejX0nE+H+Z4u1QiHNO/DVfOh8hdJWYT42LLx+NHN9XtlSoVxrL8tpGjheILFTqFmvU7txO6RaKZT5Jz+ir9xeiWSl8M9nBpnayunVqzYKh9eniXNTl8vpVvbhFwOP74nDadFG4RdGmbeXdriibqPwG2budqKnQofXQHgqjIfOhlNfhX1nX958FcaZq53ordDZOXRvhVNXX8DtF87TNP3EDLlyNZpaLlwOxkWSJIWYXX20q4vIrRY+jat/S4tCVmPjBWXuDkSLhave2V02ojDeBxAfHK1n2CvcZs1vYhcXQJxZOhpqrBWqvofpr7fSPOE3F84vTgKcXvze9AxHvy9sFY6U40Zleo6jMxmWChfqHWK8n8PRdGGpULe4lBiWqHZdKtzqRg3TkxwtudkpfNbN3tKwSNWpQu0hJQyrVF0q3GgHftPNcV0qXOp/sBdhFBou6jcMpl0qNNxrmlz8XUMnC/fBFw7067uGG40ptITCGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwlqAhc1/4NHfx2Qq9H7lXhT1dNaNf1HqDc/djt4YrroXa+3rtx1Wb4PWlQfq/zPrWy8PAAAAAAAAAAAAAAAAAAAA4D/0F5lQSZ+5G/qbAAAAAElFTkSuQmCC" width="50px" height="50px">
<https://www.linkedin.com/in/carol-sanches-878391185>
