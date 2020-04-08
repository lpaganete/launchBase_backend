
// o objeto document consegue manipular todos os elementos e  tags do html transformando cada tag em objeto 
// O querySelector vai selecionar qualquer elemento baseado em classe, id, ou no proprio nome da tag. (Baseado no CSS )

/*ABRINDO O MODAL*/
const modalOverlay = document.querySelector('.modal-overlay') //Aqui estou selecionando a classe moda-overlay do css. Quando ele achar, ele vai adicionar na variavel modalOverlay que foi criada. 
const  cards =  document .querySelectorAll ('.card') //com o all, ele irá pegar todos os elementos com classe card 

//Para cada card dentro da variavel cards. qundo "ouvir" um click. chame a classe CSS: modal-overlay.active 
for (let card of cards) {
    //addEventListener é um ouvidor de eventos. O evento que vou querer ouvir é um click
     card.addEventListener("click", function() {
        
        const videoId = card.getAttribute("id") //! getAttribute, permite pegar qualquer atributo dentro da div 

        modalOverlay.classList.add('active')   //quando clicar em algum card, ele vai adicionar a classe modalOverlay o active. que abre o modal atrvés do CSS.

        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId }` //! definindo os videos para cada grid. Ao inserir as linhas com comentári em vermelho. E definindo o id de cada url de  vídeo como id de cada div, eu consigo armazena-lo em uma variavel, e depois modificalo de acordo com cada grid.
 
     }) 
} 

/*FECHANDO O MODAL*/

const closeModal = document.querySelector('.close-modal').addEventListener("click", function (){
    modalOverlay.classList.remove("active") //classlist ele vai pegar todos os elementos que estiverem dentro do  <div class="modal-overlay">  

    modalOverlay.querySelector("iframe").src = ""; //! Quando fechar o modal o video para de reproduzir. Posis está retornando url vazia
})  

/*Maximizando Modal
(dica: utilize a mesma lógica implementada para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains do classList para verificar se o elemento está ou não com a classe maximize).
*/

const maximizeModal = document.querySelector('.modal').addEventListener("click", function (){
    modalOverlay.classList.contains("maximize") //classlist ele vai pegar todos os elementos que estiverem dentro do  <div class="modal-overlay">  
   
})  

