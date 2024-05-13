function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  let hayNegativos = num1 < 0 || num2 < 0 || num3 < 0;
  let todosSonCero = num1 === 0 || num2 === 0 || num3 === 0;
  let num1MayorALosDemas = num1 > num2 && num1 > num3;
  let num1EsPositivo = num1 > 0;
  let num3MayorALosDemas = num3 > num1 && num3 > num2;

  if (hayNegativos) {
    return "Hay negativos";
  }
  else if (todosSonCero) {
    return "Error";
  }
  else if (num3MayorALosDemas) {
    num3 += 1;
    return num3;
  }
  else if (num1MayorALosDemas && num1EsPositivo) {
    return "Numero 1 es mayor y positivo";
  }
  else {
    return false;
  }
}

console.log(operadoresLogicos(3, 2, 1)); // "Numero 1 es mayor y positivo"
console.log(operadoresLogicos(-3, -4, -5)); // Hay Negativos
console.log(operadoresLogicos(3, 4, 5)); // 6
console.log(operadoresLogicos(0, 0, 0)); // "Error"
console.log(operadoresLogicos(5, 17, 2)); // False




module.exports = operadoresLogicos;
