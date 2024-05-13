function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 && booleano2) {
    return true;
  }
  else {
    return false;
  }
}

console.log(esVerdaderoYFalso(true, true));
console.log(esVerdaderoYFalso(true, false));
console.log(esVerdaderoYFalso(false, false));
console.log(esVerdaderoYFalso(false, true));

module.exports = esVerdaderoYFalso;
