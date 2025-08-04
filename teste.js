// criando uma interface que lê do teclado e escreve no terminal.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntando ao usuário e verificando se a palavra é palíndrono
rl.question("Digite uma palavra para verificar se é um palíndromo: ", function(palavra) {
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse().join("");

    if (palavra === palavraInvertida) {
        console.log("A palavra '" + palavra + "' é um palíndromo!");
    } else {
        console.log("A palavra '" + palavra + "' não é um palíndromo.");
    }

    rl.close(); // Finaliza a interface
});