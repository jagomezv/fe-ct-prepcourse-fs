function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   // let esPositivo = a > 0;
   let esPositivo = a >= 0;

   let inferiorA10 = a < 10;

   if (esPositivo && inferiorA10) {
      return true;
   }
   else {
      return false;
   }
}  

console.log(esPositivoOInferiorA10(0));
console.log(esPositivoOInferiorA10(1));
console.log(esPositivoOInferiorA10(2));
console.log(esPositivoOInferiorA10(3));
console.log(esPositivoOInferiorA10(4));
console.log(esPositivoOInferiorA10(5));
console.log(esPositivoOInferiorA10(6));
console.log(esPositivoOInferiorA10(7));
console.log(esPositivoOInferiorA10(8));
console.log(esPositivoOInferiorA10(9));
console.log(esPositivoOInferiorA10(10));

module.exports = esPositivoOInferiorA10;
