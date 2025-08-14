function perfeito(n) {
    let resu = 0

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            resu += i
        }
    }

    if (resu == n) {
        console.log('É perfeito')
    } else {
        console.log('Não é perfeito')
    }
}

perfeito(28)