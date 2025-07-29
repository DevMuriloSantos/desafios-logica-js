let resul = 1

function fatorial (n) {
    for (let i = 1; i <= n; i++) {
        resul *= i
    }

    console.log(`Fatorial: ${resul}`)
}

fatorial (5)

