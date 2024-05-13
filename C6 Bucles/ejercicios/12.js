function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let divisbleEntre3 = num % 3 === 0;
  let divisbleEntre5 = num % 5 === 0;

  if (divisbleEntre3 && divisbleEntre5) {
    return "fizzbuzz";
  }
  else if (divisbleEntre3) {
    return "fizz";
  }
  else if (divisbleEntre5) {
    return "buzz";
  }
  else {
    return false;
  }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(2));

module.exports = fizzBuzz;
