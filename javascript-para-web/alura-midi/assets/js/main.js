const teclas = document.querySelectorAll('.tecla');

teclas.forEach((tecla) => {
    const idAudio = '#som_'+tecla.classList[1];

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(event) {
        if(event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
});

function tocaSom (idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor invalido')
    }
};
