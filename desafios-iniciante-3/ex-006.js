let array = [];
let res = 0;

function number (n) {
    let string = n.toString();

    for (let i = 0; i < string.length; i++) {
        res += Number(string[i]);
    }

    console.log(`Soma dos dígitos: ${res}`);
}

number(527)