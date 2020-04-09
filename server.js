//importando dependencias
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

 

//1-setando a porta que o servidor vai rodar e exibindo mensagem caso o ele execute
server.listen(5001, function() {
    console.log("Server is running!")
})


 //2-Configurando a rota da pagina index (about)
 server.get("/", function(req, res) {  //o / chama a pagina inicial

    //10- Criando objeto about para armazenar todos componentes da minha página about.njk no back-end
    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",  
        description: 'Programdor full-tack, focado em trazer o melhor ensino para iniciantes em programação. colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            {name: "Github", url: "https://github.com/maykbrito/"},
            {name: "Twitter", url: "https://twitter.com/maykebrito/"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/"},
        ]
    }

    return res.render("about", {about: about}) //10-  cria um objeto trazendo a variavel aabout  para dentro da propiedade about que vai ser acessado no front- end. Assim como foi feito na pagina portifolio
})
 

//3- instalar dependencia nodemon que reinicia o servidor a cada alteração: "npm install -D nodemon" e alterar o aributo start para: "start": "nodemon server.js" no arquivo package.json 

//4-Instalar dependencia nunkuks que é um template engine. Um motor que trabalha com templates.
//temos que chamar o nunjuks no inicio do server.js

server.set("view engine", "njk") //qual tipo de arquivo que ele vai ler
 
nunjucks.configure("views", {
    
    express: server,
    autoescape: false, //! configurando nunjucks para aceitar códigos html dentro de outros codigos html (ex: um link dentro de um paragrafo)
     noCache: true, //Não deixa armazenar cache

})

//5-Configurando o express para renderizar o css
//abaixo dizemos para o express ler arquivos statics e que eles estão na pasta public
server.use(express.static('public'))   

//-6 Configurando rota da página classes(portifólio) 

server.get("/portifolio", function(req, res) { 
    return res.render("portifolio", {items: videos}) //-9 cria um objeto trazendo os videos para dentro da propiedade items que vai ser acessado no fron-end
})

//7-configurar engine para ler arquivos njk (linha 22)


//8-trazendo os objetos do array para dentro da variavel videos.
const videos = require('./data') // o  ./ acessa arquivos que estão na raiz do projeto

//9-enviando os dados do back-end(data.js) para meu front-end(portifolio.njk) ***  Está junto da etapa 6 ***


//10- trazendo varias celementos do back-end para pagina about

//11- A idéia é: remover o modal, e ao clicar em um card encaminhar o usuário para outra página

server.get("/video", function(req, res) {  //Usando o rec
   //passando id do video pela url

   const id = req.query.id  //Inserindo o id dentro da variavel id

    const video = videos.find(function(video) { // vai rodar todos os elementos do array executando a function 1 por um
        if(video.id == id){
            return true;
        }
    })

    if(!video) {
        return res.end("Video not found!")
    }

    return res.render("video", {video})
})