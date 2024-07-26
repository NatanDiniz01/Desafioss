function acharVogais(wordsList) {
    let vogaisAchadas = [];

    for (let palavra of wordsList) {
        for (let letra of palavra) {
            if ("aeiou".includes(letra.toLowerCase())) {
                vogaisAchadas.push(letra);
            }
        }
    }
    return {
        vogais: vogaisAchadas,
        quantidade: vogaisAchadas.length
    };
}

const wordsList = ["abacaxi", "alegria", "bicicleta", "ouro", "elefante"];

const resultado = acharVogais(wordsList);

alert('Vogais encontradas: ' + resultado.vogais.join(', ') + '\nQuantidade de vogais: ' + resultado.quantidade);