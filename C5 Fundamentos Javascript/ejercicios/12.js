function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  var longitudStr1 = str1.length;
  var longitudStr2 = str2.length;

  if (longitudStr1 === longitudStr2) {
    return true;
  }
  else {
    return false;
  }
}

console.log(tienenMismaLongitud("soyHenry", "Henrysoy"));
console.log(tienenMismaLongitud("soyHenry", "a"));

module.exports = tienenMismaLongitud;