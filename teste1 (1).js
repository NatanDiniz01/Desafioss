function PedraPapelTesoura(jogada1, jogada2) {

    const jogadasAceitas = ['pedra', 'papel', 'tesoura'];

    if (!jogadasAceitas.includes(jogada1) || !jogadasAceitas.includes(jogada2)) {
        return 'Erro: Pode haver jogadas inválidas.';
    }

    if (jogada1 === jogada2) {
        return 'Empate';
    }
    if ((jogada1 === 'pedra' && jogada2 === 'tesoura') || (jogada1 === 'tesoura' && jogada2 === 'papel') || (jogada1 === 'papel' && jogada2 === 'pedra')) {
        return jogada1 + ' vence de ' + jogada2;
    }
    else {
        return jogada2 + ' vence de ' + jogada1;
    }

}

var jogada1 = prompt("Jogador 1, escolha pedra, papel ou tesoura:").toLowerCase();

var jogada2 = prompt("Jogador 2, escolha pedra, papel ou tesoura:").toLowerCase();

var resultado = PedraPapelTesoura(jogada1, jogada2);

alert("Resultado: " + resultado);