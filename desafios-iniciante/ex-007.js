const vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0

function teste(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == vogais[i]) {
            contador++
        }
    }
}

teste('javascript');

console.log(contador)