function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let contador = 2;
  while (numero > contador) {
    contador *= 2;
  }

  if (contador > numero) {
    return false;
  }
  else {
    return true;
  }
  
}

console.log(esPotenciaDeDos(2));
console.log(esPotenciaDeDos(4));
console.log(esPotenciaDeDos(8));
console.log(esPotenciaDeDos(16));
console.log(esPotenciaDeDos(3));
console.log(esPotenciaDeDos(5));
module.exports = esPotenciaDeDos;
