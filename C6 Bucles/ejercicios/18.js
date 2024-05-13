function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var producto = 1;
  for (var i = a; i <= b; i++) {
    producto *= i;
  }
  
  return producto === -0 ? 0 : producto;
}


console.log(productoEntreNúmeros(2, 5));
console.log(2 * 3 * 4 * 5);
module.exports = productoEntreNúmeros;