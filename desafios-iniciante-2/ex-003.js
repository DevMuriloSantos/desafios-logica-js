let resul = 0

function soma (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            resul += i
        }
    }

    console.log(`Soma dos pares: ${resul}`)
}

soma (10)