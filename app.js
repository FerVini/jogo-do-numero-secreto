let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function definirTextoHtml(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
}

function exibirMensagemInicial() {
    definirTextoHtml('h1', 'Jogo do número secreto');
    definirTextoHtml('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemGanhou = `Você achou o número secreto com ${tentativas} ${palavraTentativa}.`;

        definirTextoHtml('h1', 'Parabéns!');
        definirTextoHtml('p', mensagemGanhou);

        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(chute > numeroSecreto) {
            definirTextoHtml('p', 'O número secreto é menor.');
            limparCampo();
        } else {
            definirTextoHtml('p', 'O número secreto é maior.');
            limparCampo();
        }
        tentativas++;
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
    document.querySelector('input').select();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosDaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido; 
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true  )
}



exibirMensagemInicial()