function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
let respuesta = 0;
for (let i = 0; i <= n; i++) {
  respuesta += i;
}
return respuesta;
}

console.log(sumarHastaN(5));
console.log(1 + 2 + 3 + 4 + 5)

module.exports = sumarHastaN;
