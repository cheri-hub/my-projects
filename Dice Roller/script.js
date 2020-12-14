function playDice() {
    let p1 = Math.floor(Math.random() * 7)
    let p2 = Math.floor(Math.random() * 7)
    let valueP1 = document.getElementById('valueP1')
    let valueP2 = document.getElementById('valueP2')

    valueP1.innerHTML = p1
    valueP2.innerHTML = p2

    if (p1 > p2) {
        setTimeout(function() {
            alert('Player 1 Vencedor!')
        }, 250);
        
    } else if (p1 < p2) {
        setTimeout(function() {
            alert('Player 2 Vencedor!')
        }, 250);
    } else {
        setTimeout(function() {
            alert('Empate!')
        }, 250);
    }
}