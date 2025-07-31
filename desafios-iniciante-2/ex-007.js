const numeros = [-5, 2, -3, 7, 0, -1]
let contador = 0

for (let i in numeros) {
    if (numeros[i] < 0) {
        contador++
    }
}

console.log(`Quantidade de negativos: ${contador}`)