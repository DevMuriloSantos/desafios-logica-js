const numeros = [-2, 5, 0, -8, 7]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] <= 0) {
        numeros.splice(numeros[i], 1) // remove o elemento desejado
    }
}

console.log(numeros)