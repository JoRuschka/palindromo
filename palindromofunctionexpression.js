/* A Function Expression é sempre declarada dentro de uma constante (const), sendo o nome dessa 
constante o mesmo nome da função, e atribuímos valor à ela, dizendo que ela é uma função (function).
E a função só pode ser chamada após ter sido declarada.
*/

const essaPalavraEUmPalindromo = function() {
    var palavra = "rever";
    var separandoAsLetrasDaPalavra = palavra.split("");
    //console.log(separandoAsLetrasDaPalavra);
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }    
};

essaPalavraEUmPalindromo ();

/* No exemplo acima, declaramos a variável (var) palavra, atribuindo "rever". Caso eu queira que essa 
palavra venha de fora, temos de utilizar o parâmetro na function (function (palavra)).

const essaPalavraEUmPalindromo = function(palavra) {    
    var separandoAsLetrasDaPalavra = palavra.split("");
    //console.log(separandoAsLetrasDaPalavra);
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }    
};

essaPalavraEUmPalindromo ("rever");

*/