function inverterString(str) {
  return str.split('').reverse().join('');
}

// Exemplo de uso:
let minhaString = "radar";
let stringInvertida = inverterString(minhaString);

if (stringInvertida === minhaString) {
    console.log('É palíndromo') //  palavra que se lê igual de frente pra trás e de trás pra frente
} else {
    console.log('Não é palíndromo')
}