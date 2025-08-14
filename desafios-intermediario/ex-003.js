function matrizSimetrica(matriz) {
  let simetrica = true;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matriz[i][j] !== matriz[j][i]) {
        simetrica = false;
      }
    }
  }

  if (simetrica) {
    console.log("É simétrica");
  } else {
    console.log("Não é simétrica");
  }
}

matrizSimetrica([
  [1, 2, 3],
  [2, 3, 1],
  [3, 1, 2],
]);