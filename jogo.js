let executando = false
const startBotao = document.querySelector("#btn--start");
const sortearNumero = document.querySelector(".num--atual");

const placarVit = document.querySelector(".num--vit");
const placarDer = document.querySelector(".num--der");

startBotao.addEventListener("click", startGame)

function startGame(){

    if (executando){
        alert("Jogo já esta em andamento")
        return
    } else{
        sortearNumero.textContent = Math.floor(Math.random()*20+1)
        executando = true
    }
}

function verificarResposta(palpite){
    let numAnterior = Number(sortearNumero.textContent);
    sortearNumero.textContent = Math.floor(Math.random()*20+1)
    let numNovo = sortearNumero.textContent;

    if (palpite === "alto" && numNovo > numAnterior){
        acertos++
        verificarVitoria();
    } else if (palpite === "baixo" && numNovo < numAnterior){
        acertos++
        verificarVitoria();
    } else {
        gameOver();
    }

}

function sortearNum(){
    return sortearNumero.textContent = Math.floor(Math.random()*20+1)
}

function verificarVitoria(){
    if (acertos >= 3){
        placarVit.textContent++
        acertos=0;
    }

}

function gameOver(){
    placarDer.textContent++;
    executando = false;
    sortearNumero.textContent ="";
    acertos = 0
}


