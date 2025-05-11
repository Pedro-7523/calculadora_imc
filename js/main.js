let button = document.getElementById("enviar");

function calcularImc() {
    button.addEventListener("click", function (event) {
        event.preventDefault();


        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);

        let imc = peso / (altura * altura);

        let resposta = document.getElementById("resposta");


        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            document.getElementById("resposta").innerHTML = "Por favor, insira valores válidos.";
            return; 
        }
        
        if (imc < 18.5) {
            resposta.innerHTML = "Abaixo do peso";
        } else if (imc < 25) {
            resposta.innerHTML = "Peso normal";
        } else if (imc < 30) {
            resposta.innerHTML = "Excesso de peso";
        } else if (imc < 35) {
            resposta.innerHTML = "Obesidade grau I";
        } else if (imc < 40) {
            resposta.innerHTML = "Obesidade grau II";
        } else {
            resposta.innerHTML = "Obesidade grau III";
        }

    });
}

calcularImc();
