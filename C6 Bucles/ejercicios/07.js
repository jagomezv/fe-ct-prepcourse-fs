function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  let esPar = a % 2 === 0;
  let divisiblePorTres = a % 3 === 0;
  if (esPar && divisiblePorTres) {
    return true;
  } 
  else {
    return false;
  }
}

console.log(esParYDivisiblePorTres(6));
console.log(esParYDivisiblePorTres(4));


module.exports = esParYDivisiblePorTres;