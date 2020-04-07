const express = require('express')

const server = express()


 //2-Configurando a rota da pagina index (about)
 server.get("/", function(rec, res) { 
    return res.render("index") //chamando a antiga pagina index
})



//1-setando a porta que o servidor vai rodar e exibindo mensagem caso o ele execute
server.listen(5001, function() {
    console.log("Server is running!")
})git shortlog
