function AcharMenoreMaior(numeros) {
    let maior = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > maior) {
            maior = numeros[i];
        }

        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return 'O menor número é ' + menor + ' e o maior número é ' + maior;
}

const randomNumbers = [-1234, 5678, -987, 4321, -5555, 9999, -2345, 1111, -8888, 3456];

const resultado = AcharMenoreMaior(randomNumbers);

alert(resultado);