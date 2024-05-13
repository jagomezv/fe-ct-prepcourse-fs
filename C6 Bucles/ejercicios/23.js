function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let divisorValido = 1; 
  let contador = 0;
  for (i = 1; i <= numero; i++) {
    if (numero % divisorValido === 0) {
      contador += 1;
    }
    divisorValido += 1;
  }
  if (contador === 2) {
    return true;
  }
  else {
    return false;
  }
}


console.log(esNumeroPrimo(2)); // true
console.log(esNumeroPrimo(3)); // true
console.log(esNumeroPrimo(4)); // false
console.log(esNumeroPrimo(5)); // true
console.log(esNumeroPrimo(6)); // false
module.exports = esNumeroPrimo;
