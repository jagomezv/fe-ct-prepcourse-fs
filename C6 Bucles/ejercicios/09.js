function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  switch (status) {
    case 1:
      return "Online";
      break;
    case 2: 
      return "Away";
    default:
      return "Offline";
      break;
  }
}

console.log(conection(1));
console.log(conection(2));
console.log(conection(3));

module.exports = conection;
