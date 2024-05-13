function areaDelTriangulo(base, altura) {
  // La función recibe dos argumentos llamados "base" y "altura" los cuales son numeros.
  // Retornar el área de un triangulo teniendo su base y altura.
  // Por ejemplo: 
  // 10, 5 ---> 25
  // 0, 10 ---> 0
  // Tu código:
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo; 
}

console.log(areaDelTriangulo(10, 5));
console.log(areaDelTriangulo(0, 10));

module.exports = areaDelTriangulo;
