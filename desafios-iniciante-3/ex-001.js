function validacao (senha) {
    let espaco = false
    let letra = false
    let numero = false

    if (senha.length < 8) {
        console.log('Senha inválida')
        return
    }

    for (let i = 0; i < senha.length; i++) {
        let char = senha[i]
        if (char >= '0' && char <= '9') {
            numero = true
        } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            letra = true
        } else if (char === ' ') {
            espaco = true
        }
    }

    if (letra && numero && !espaco) {
        console.log('Senha válida!')
    } else {
        console.log('Senha inválida!')
    }
}

validacao("abc12345")