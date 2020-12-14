let dado = document.getElementById('rodardado')

dado.addEventListener('click', function(){
    let numeroJogador1 = Math.floor(Math.random() * 7)
    let numeroJogador2 = Math.floor(Math.random() * 7)
    let ponto1 = document.getElementById('ponto1')
    let ponto2 = document.getElementById('ponto2')
    let vencedor1 = document.getElementById('vencedor1')
    let vencedor2 = document.getElementById('vencedor2')
    vencedor1.style.color = "#FF6F61"
    vencedor2.style.color = "#61F1FF"

    ponto1.innerHTML = numeroJogador1
    ponto2.innerHTML = numeroJogador2

    if (numeroJogador1 > numeroJogador2){
        vencedor1.style.color = "black"
        vencedor1.innerHTML = "Vencedor!"
    } else if (numeroJogador1 < numeroJogador2){
        vencedor2.style.color = "black"
        vencedor2.innerHTML = "Vencedor!"
    } else {
        vencedor1.innerHTML = "Empate!"
        vencedor2.innerHTML = "Empate!"
        vencedor1.style.color = "black"
        vencedor2.style.color = "black"
    }
})