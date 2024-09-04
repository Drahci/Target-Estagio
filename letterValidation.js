const readline = require("readline-sync");

function countLetterA(str) {
  let count = 0;
  for (let char of str) {
    if (char.toLowerCase() === "a") {
      count++;
    }
  }
  return `A letra 'a' aparece ${count} vezes na string.`;
}

const inputString = readline.question(
  'Informe uma string para verificar a quantidade de letras "a": '
);
console.log(countLetterA(inputString));
