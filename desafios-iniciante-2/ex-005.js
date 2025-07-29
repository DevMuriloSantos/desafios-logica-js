const numeros = [1, 5, 9, 3]
let contador = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        contador++
    }
}

if (contador == numeros.length) {
    console.log('Todos são positivos')
} else {
    console.log('Nem todos são positivos')
}