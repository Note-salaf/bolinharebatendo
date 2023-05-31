const bolinha = document.querySelector('#bolinha')
let sentidoY = 1
let sentidoX = 1
const pontuacao = document.querySelector('#pontuacao')
const somPontos = document.querySelector('#somPontos')
const somBolinhaRebatendo = document.querySelector('#somBolinhaRebatendo')
const botParar =  document.querySelector('#botParar')
const botReiniciar =  document.querySelector('#botReiniciar')
const botIniciar =  document.querySelector('#botIniciar')
let bolinhaEmMovimento = false
let pontos = 0
let jaBateu = 0
let movimentoAutomatico
let jogoIniciado = false
        const objBolinha = {
            raio: 25,
            x: 0,
            y: 0,
            
        }    
        // Funções para movimentar a bolinha
        function direita() {
                objBolinha.x += 10
                bolinha.style.left = objBolinha.x + 'px'
            }    
        
        function esquerda() {
            objBolinha.x -= 10
            bolinha.style.left = objBolinha.x + 'px'
        }

        function baixo() {
                objBolinha.y += 10
                bolinha.style.top = objBolinha.y + 'px'
        }

        function cima() {
            objBolinha.y -= 10
            bolinha.style.top = objBolinha.y + 'px'
        }
        //Função para escolher sentido X da bolinha
        function escolheSentidoX() {
            if (objBolinha.x < window.innerWidth -65 && sentidoX == 1) {
                direita()
            } else {
                sentidoX = -1
            }

            if (objBolinha.x > 0 && sentidoX == -1) {
                esquerda()
            } else {
                sentidoX = 1
                direita()
            }
        }
        //Função para escolher sentido Y da bolinha
        function escolheSentidoY() {
            if (objBolinha.y < window.innerHeight -65 && sentidoY == 1) {
                baixo()
            } else {
                sentidoY = -1
            }

            if (objBolinha.y > 0 && sentidoY == -1) {
                cima()
            } else {
                sentidoY = 1
                baixo()
            }
        }
        //Conta pontos e mostra no "placar"
function contaPontos() {
    if (bolinhaEmMovimento) {
        somPontos.play()
        pontos++
        pontuacao.textContent = 'Pontos: ' + pontos
    }    
}
// inicia movimento automático
function iniciar() {
    if (bolinhaEmMovimento == false && jogoIniciado == false) {
            movimentoAutomatico = setInterval(() => {
                escolheSentidoX() 
                escolheSentidoY()
                rebateDireita()
                rebateEsquerda()
                rebateSuperior()
                rebateInferior()
        }, 100);
        bolinhaEmMovimento = true
        jogoIniciado = true
    }    
}

//reinicia movimento
function reiniciaMovimento() {
    if (bolinhaEmMovimento == false && jogoIniciado == true) {
        movimentoAutomatico = setInterval(() => {
            escolheSentidoX() 
            escolheSentidoY()
            rebateDireita()
            rebateEsquerda()
            rebateSuperior()
            rebateInferior()
        }, 100);
        bolinhaEmMovimento = true
    }
}


// para a bolinha
function paraBolinha() {
    clearInterval(movimentoAutomatico)
    bolinhaEmMovimento = false
}
//produz som da bolinha batendo na borda
function tocarSomBolinhaRebatendo() {
        somBolinhaRebatendo.play()
               }

// vefica se a bolinha chegou na borda direita para produzir som
function rebateDireita() {
    if (objBolinha.x >= window.innerWidth - 65 ) {
                tocarSomBolinhaRebatendo()
            }
}
// vefica se a bolinha chegou na borda esquerda para produzir som
function rebateEsquerda() {
    if (objBolinha.x <= 0 ) {
                tocarSomBolinhaRebatendo()
            }
}
// vefica se a bolinha chegou na borda superior para produzir som
function rebateSuperior() {
    if (objBolinha.y <= 0 ) {
                tocarSomBolinhaRebatendo()
            }
}
// vefica se a bolinha chegou na borda inferior para produzir som
function rebateInferior() {
    if (objBolinha.y >= window.innerHeight -65 ) {
                tocarSomBolinhaRebatendo()
            }
}
bolinha.addEventListener('click', () => {
    contaPontos()
    console.log('bolinha clicada')
})
botIniciar.addEventListener('click', () => {
    iniciar()
})
botParar.addEventListener('click', () => {
    paraBolinha()
})
botReiniciar.addEventListener('click', () => {
reiniciaMovimento()
})
