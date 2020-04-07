const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

//1-setando a porta que o servidor vai rodar e exibindo mensagem caso o ele execute
server.listen(5001, function() {
    console.log("Server is running!")
})


 //2-Configurando a rota da pagina index (about)
 server.get("/", function(rec, res) { 
    return res.render("index") //chamando a antiga pagina index
})


//3- instalar dependencia nodemon que reinicia o servidor a cada alteração 
//4-Instalar dependencia nunkuks que é um template engine. Um motor que trabalha com templates.
//temos que chamar o nunjuks no inicio do server.js

server.set("view engine", "html") //qual tipo de arquivo que ele vai ler
 
nunjucks.configure("views", {
    express:server
})

//Configurando o express para renderizar o css
//abaixo dizemos para o express ler arquivos statics e que eles estão na pasta public
server.use(express.static('public'))  
