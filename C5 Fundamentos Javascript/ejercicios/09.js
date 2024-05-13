function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  if (valor === 0) {
    return false;
  }
  if (valor === "") {
    return false;
  }
  if (valor === "false") {
    return false;
  }
  if (valor === false) {
    return false;
  }
  return !valor;
}


console.log(esNuloOIndefinido(null));
console.log(esNuloOIndefinido(undefined));
console.log(esNuloOIndefinido(22));
console.log(esNuloOIndefinido("texto"));
console.log(esNuloOIndefinido(0));


module.exports = esNuloOIndefinido;