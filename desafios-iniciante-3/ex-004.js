let contador = 0

function string (txt) {
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] == ' ') {
            contador++
        }
    }
}

string("Eu estou aprendendo lógica")

console.log(`Quantidade de palavras: ${contador + 1}`)