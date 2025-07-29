const vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0

function teste(text) {
    for (let i = 0; i < text.length; i++) {
        if (vogais.includes(text[i])) { // verifica se possui vogais na palavra
            contador++
        }
    }
}

teste('javascript')
console.log(contador)