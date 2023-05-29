const bolinha = document.querySelector('#bolinha')
let sentidoY = 1
let sentidoX = 1
        const objBolinha = {
            raio: 25,
            x: 0,
            y: 0,
            
        }    
        function direita() {
                objBolinha.x += 10
                bolinha.style.left = objBolinha.x + 'px'
            }    
        /*function direita() {
            if (objBolinha.x < 1310) {
                objBolinha.x += 10
                bolinha.style.left = objBolinha.x + 'px'
            }    
        }*/
        function esquerda() {
            objBolinha.x -= 10
            bolinha.style.left = objBolinha.x + 'px'
        }

        function baixo() {
                objBolinha.y += 10
                bolinha.style.top = objBolinha.y + 'px'
        }

        /*function baixo() {
            if (objBolinha.y < 570 && sentidoY == 1) {    
                objBolinha.y += 10
                bolinha.style.top = objBolinha.y + 'px'
            }    else {
                sentidoY = -1
                objBolinha.y -= 10
                bolinha.style.top = objBolinha.y + 'px'
            }
        }*/
        function cima() {
            objBolinha.y -= 10
            bolinha.style.top = objBolinha.y + 'px'
        }
        function escolheSentidoX() {
            if (objBolinha.x < window.innerWidth -50 && sentidoX == 1) {
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
        function escolheSentidoY() {
            if (objBolinha.y < window.innerHeight -50 && sentidoY == 1) {
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
const movimentoAutomatico = setInterval(() => {
    escolheSentidoX() 
    escolheSentidoY()
}, 100);