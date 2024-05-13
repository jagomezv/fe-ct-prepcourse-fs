function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  let numeroMayor = x;
  if (x > y) {
    numeroMayor = y;
  }
  return numeroMayor;
}

console.log(obtenerMayor(2, 4));
console.log(obtenerMayor(4, 4));
console.log(obtenerMayor(5, 4));
module.exports = obtenerMayor;
