function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let cantidadDigitos = num.toString().replace('.', '').length

  Fuente: https://www.iteramos.com/pregunta/75773/obtener-el-numero-de-digitos-con-javascript;
  if (cantidadDigitos === 3) {
    return true;
  } 
  else {
    return false;
  }
}

console.log(tieneTresDigitos(234));
console.log(tieneTresDigitos(22));
module.exports = tieneTresDigitos;
