const numeros = [2, 15, 8, 23, 4, 16]
let qtd = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        qtd++
    }
}

console.log(`Quantidade: ${qtd}`)