let notas = [100, 50, 20, 10, 5, 2]
let contador = 0

function value(number) {
    for (let i = 0; i < notas.length; i++) {
            let qtd = Math.floor(number / notas[i])

            console.log(`${qtd} nota de ${notas[i]}`)

            number = number % notas[i]
    }
}

value(180)