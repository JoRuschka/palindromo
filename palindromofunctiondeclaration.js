essaPalavraEUmPalindromo ();
/* Na Function Declaration, chamamos a função antes dela ter sido delarada.
Permite ser chamada, antes mesmo de ter sido declarada no código.
*/

function essaPalavraEUmPalindromo () {
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
}
