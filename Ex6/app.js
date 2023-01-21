
function verificaPalindromo(palavra) {

    const palavraInvertida = palavra.toLowerCase().split('').reverse().join('');

    return palavra.toLowerCase() === palavraInvertida;
  }
  

  const palavras = ["ana", "julia", "osso", "radar"];
  

  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i];
    if (verificaPalindromo(palavraAtual)) {
      console.log(`A palavra ${palavraAtual} é um palíndromo.`);
    } else {
      console.log(`A palavra ${palavraAtual} não é um palíndromo.`);
    }
  }