const numeros = [1, 2, 3, 4, 5, 6]

let pares = 0

for (let i in numeros) {
    if (numeros[i] % 2 == 0) {
        pares ++
    }
}

console.log(`Quantidade de pares: ${pares}`)