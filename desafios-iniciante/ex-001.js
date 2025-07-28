const mm = [3, 7, 1, 9, 4]

mm.sort((a, b) => a - b)

const pos = mm.length

console.log(`Maior: ${mm[pos - 1]}`)
console.log(`Menor: ${mm[0]}`)

// podemos fazer da seguinte forma também

/*
const mm = [3, 7, 1, 9, 4]

maior = mm[0]
menor = [0]

for (let i in mm) {
    if (mm[i] < menor) {
        menor = mm[i]
    } else if (mm[i] > maior) {
        maior = mm[i] 
    }
}

console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)
*/