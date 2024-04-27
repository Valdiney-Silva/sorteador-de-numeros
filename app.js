
function sortear() {

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (isNaN(de) || isNaN(ate) || isNaN(quantidade)) {
        alert('Todos os campos devem ser preenchidos com números!');
        return;
    }
    if (de >= ate) {
        alert('O valor do campo [Do número] deve ser menor que o campo [Até o número]!');
        return;
    }
    let diferenca = ate - de + 1;

    if (quantidade > diferenca) {
        alert("O intervalo de números entre [Do número e Até o número] é menor que a quantidade de números solicitado!");
        return;
    }
    if (quantidade <= 0) {
        alert("O campo quantidade não pode ser menor ou igual a 0!");
        return;
    }

    // (quantidade.trim() === '');
    // quantidade.trim(): remove os espaços da string;
    // === verifica se os dois operandos são identicos (tipos e valor)
    // quantidade.trim() === '': verifica se quantidade consiste apemas em espaços em branco

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
    habilitarBotao();

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function desabilitarBotao() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

function habilitarBotao() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    if (de !== '' && ate !== "" && quantidade !== '') {
        document.getElementById("btn-reiniciar").disabled = false;
        document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    } else {
        document.getElementById("btn-reiniciar").disabled = true;
    }
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;

    desabilitarBotao();
}