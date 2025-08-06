let array = []
let arrayr = []
let contador = 0

function number (n) {
    for (let i = 0; i < n.length; i++) {
        array.push(n[i])
        arrayr.push(n[i])
    }

    arrayr.reverse()

    for (let i = 0; i < array.length; i++) {
        if (array[i] === arrayr[i]) {
            contador ++
        }
    }

    if (contador == array.length) {
        console.log('É palíndromo')
    } else {
        console.log('Não é palíndromo')
    }
}

number('121')