const list = [10, 20, 30]
let soma = 0
let media = 0

for (let i in list) {
    soma += list[i]
}

media = soma / list.length

console.log(`Média: ${media}`)