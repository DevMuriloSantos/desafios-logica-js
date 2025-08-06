let arraytxt1 = []
let arraytxt2 = []
let contador = 0

function string(text1, text2) {
    for (let i = 0; i < text1.length; i++) {
        arraytxt1.push(text1[i])
    }

    for (let i = 0; i < text2.length; i++) {
        arraytxt2.push(text2[i])
    }

    arraytxt1.reverse()

    for (let i = 0; i < arraytxt1.length; i++) {
        if (arraytxt1.length == arraytxt2.length && arraytxt1[i] == arraytxt2[i]) {
            contador++
        }
    }

    if (contador == arraytxt1.length) {
        console.log('São anagramas')
    } else {
        console.log('Não são anagrama')
    }
}

string("roma", "amor")