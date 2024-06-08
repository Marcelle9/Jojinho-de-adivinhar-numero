let executando = false
const startBotao = document.querySelector("#btn--start");
const sortearNumero = document.querySelector(".num--atual");

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
    alert(`o palpite foi ${palpite}`)
}
