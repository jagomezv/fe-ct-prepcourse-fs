function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let respuesta = 0;
   for (let i = 0; i <= n; i++) {
      respuesta += i;
      console.log(respuesta)
      if (respuesta > 100) {
         break;
      }
   }
   return respuesta;
}

console.log(sumarHastaNConBreak(100));
console.log(sumarHastaNConBreak(9));

module.exports = sumarHastaNConBreak;
