
function sortear() {

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let diferenca = ate - de;



    if (de > ate) {
        alert("O valor do campo [Do número] não pode ser maior que o campo [Até o número]!");
    }
    else if (quantidade > diferenca) {
        alert("O limite do total de números entre [Do número e Até o número] é menor que a quantidade de números solicitado!");
    }
    else if (isNaN(diferenca)) {
        console.log("Diferenca: " + diferenca);
        alert('Ambos os campos [Do número] e [Até o número] devem ser preenchidos com números!')
    }
    // (quantidade.trim() === '');
    // quantidade.trim(): remove os espaços da string;
    // === verifica se os dois operandos são identicos (tipos e valor)
    // quantidade.trim() === '': verifica se quantidade consiste apemas em espaços em branco

    else if (quantidade == 0 || isNaN(quantidade)) {
        console.log("quantidade: " + quantidade);
        alert("Todos os campos devem ser preenchidos com números!");
    }

    else {
        console.log("quantidade: " + quantidade);
        console.log("Diferenca: " + diferenca);
        let numerosSorteados = [];
        let numero;

        for (let i = 1; i <= quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (numerosSorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }
            numerosSorteados.push(numero);

        }

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados} </label>`;
        alterarStatusBotao();
    }
}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function desabilitarBotao() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    desabilitarBotao();


}