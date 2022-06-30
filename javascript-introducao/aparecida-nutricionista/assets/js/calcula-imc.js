var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPEso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPEso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        tdImc.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    } else {
        paciente.classList.remove("paciente-invalido");
    }

    if (!alturaValida) {
        tdImc.textContent = "Altura inválida!"
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    } else {
        paciente.classList.remove("paciente-invalido");
    }

    if (pesoValido && alturaValida ) {
        tdImc.textContent =  calculaImc(peso, altura); 
    }

}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}