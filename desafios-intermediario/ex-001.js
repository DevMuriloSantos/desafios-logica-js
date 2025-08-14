function tabuada () {
    for (let x = 1; x <= 10; x++) {
        console.log(`\n Tabuada do ${x}: \n`);

        for (let y = 0; y <= 10; y++) { /* faz esse processo inteiro até o final, depois volta no primeiro loop */
            console.log(`${x} x ${y} = ${x * y}`) // \n => pula uma linha
        }
    }
}

tabuada()