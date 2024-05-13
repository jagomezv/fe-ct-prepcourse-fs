function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let result = num;
  let i = 0;
  do {
    result += 5;
    i++;
  } while (i < 8)
  return result;
}

console.log(doWhile(1));
console.log(1 + 40);

module.exports = doWhile;