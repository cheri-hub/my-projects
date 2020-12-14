let squares, red, green, blue, minGreen, colorPicked, colorPickedMin, difSquare //SETA TODAS AS VARIAVEIS GLOBAIS QUE IRÃO SER USADAS

function dado() {
    let dadoP1 = document.getElementById('dadoP1')
    let dadoP2 = document.getElementById('dadoP2')

    dadoP1.innerHTML = Math.floor(Math.random() * 7)
    dadoP2.innerHTML = Math.floor(Math.random() * 7)

    if (dadoP1.innerHTML > dadoP2.innerHTML) {
        setTimeout(function() {
            alert('Player 1 joga')
        }, 250);
        
    } else if (dadoP1.innerHTML < dadoP2.innerHTML) {
        setTimeout(function() {
            alert('Player 2 joga')
        }, 250);
    } else {
        setTimeout(function() {
            alert('Empate! Rode novamente')
        }, 250);
    }
}

init() //INICIA

function init(){
    squares = document.querySelectorAll(".square") //SELECIONA TODOS OS QUADRADOS;
    red = generateRed() //GERA VERMELHO E SALVA NA VAR RED
    green = generateGreen() //GERA VERDE E SALVA NA VAR GREEN
    blue = generateBlue() //GERA AZUL E SALVA NA VAR BLUE
    minGreen = green-5 //GERA VERDE -2 E SALVA NA VAR MINGREEN
    colorPicked = "rgb(" + red + "," + green + "," + blue + ")" //GERA A COR RGB
    colorPickedMin = "rgb(" + red + "," + minGreen + "," + blue + ")" //GERA A COR RGB DIFERENTE
    difSquare = generateRandomSquare() //GERA O QUADRADO QUE TERÁ A COR DIFERENTE

    for (let i = 0; i < squares.length; i++){ //SETA TODOS OS QUADRADOS PARA A COR SELECIONADA
        squares[i].style.backgroundColor = colorPicked
    }

    squares[difSquare].style.backgroundColor = colorPickedMin //SETA UM QUADRADADO PARA TER A COR DIFERENTE

    for (let j = 0; j < squares.length; j++){ //O QUADRADO CLICADO RECEBE UM ALERTA
        squares[j].addEventListener("click", function(){
            if(squares[j] == squares[difSquare]){
                alert("Acertô miseravi!")
                reset();
            } else {
                alert("Errou! Tente novamente.")
                squares[j].style.backgroundColor = "transparent"
            }
        })
    }
}

function generateRed(){ //GERA O VERMELHO ALEATORIO
    let r = Math.floor(Math.random() * 256)    
    return r
}

function generateGreen(){ //GERA O VERDE ALEATORIO
    let g = Math.floor(Math.random() * 256)
    if (g == 0){
        g = 2
    }    
    return g
}

function generateBlue(){ //GERA O AZUL ALEATORIO
    let b = Math.floor(Math.random() * 256)    
    return b
}

function generateRandomSquare(){
    let s = Math.floor(Math.random() * 6)
    return s;
}

function reset(){
    red = generateRed() //GERA VERMELHO E SALVA NA VAR RED
    green = generateGreen() //GERA VERDE E SALVA NA VAR GREEN
    blue = generateBlue() //GERA AZUL E SALVA NA VAR BLUE
    minGreen = green-5 //GERA VERDE -2 E SALVA NA VAR MINGREEN
    colorPicked = "rgb(" + red + "," + green + "," + blue + ")" //GERA A COR RGB
    colorPickedMin = "rgb(" + red + "," + minGreen + "," + blue + ")" //GERA A COR RGB DIFERENTE
    difSquare = generateRandomSquare() //GERA O QUADRADO QUE TERÁ A COR DIFERENTE

    for (let i = 0; i < squares.length; i++){ //SETA TODOS OS QUADRADOS PARA A COR SELECIONADA
        squares[i].style.backgroundColor = colorPicked
    }

    squares[difSquare].style.backgroundColor = colorPickedMin //SETA UM QUADRADADO PARA TER A COR DIFERENTE
}