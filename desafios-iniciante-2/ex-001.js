let divs = 0

function primo (n) {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divs++
        }
    }

    if (divs == 2) {
        console.log('É primo')
    } else {
        console.log('Não é primo')
    }
}

primo(9)