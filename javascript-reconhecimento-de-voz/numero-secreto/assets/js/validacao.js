function validaChute(chute) {
    const numero = +chute

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Não foi possivel reconhecer  um valor numerico.</div>'
        return
    }

    if(verificaAlcanceChute(numero)) {
        elementoChute.innerHTML += `<div>Fale um numero entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O numero secreto é menor <i class="fa-solid fa-down-long icon-color"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O numero secreto é maior <i class="fa-solid fa-up-long icon-color"></i></div>'
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function verificaAlcanceChute(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})