function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let esAlgunColorDeLaLista = color === "blue" || color === "red" || color === "green" || color === "orange";
  if (esAlgunColorDeLaLista) {
    return "This is " + color;
  }
  else {
    return "Color not found";
  }
}

console.log(colors("blue"));
console.log(colors("red"));
console.log(colors("green"));
console.log(colors("orange"));
console.log(colors("black"));



module.exports = colors;
