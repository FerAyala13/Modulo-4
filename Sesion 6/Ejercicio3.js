const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa números separados por espacios: ", function (input) {
  const numeros = input.split(" ").map(Number);
  const numerosValidos = numeros.filter(num => !isNaN(num));

  if (numerosValidos.length === 0) {
    console.log("No ingresaste números válidos.");
  } else {
    const suma = numerosValidos.reduce((total, num) => total + num, 0);
    console.log(`La suma de los números es: ${suma}`);
  }

  rl.close();
});
