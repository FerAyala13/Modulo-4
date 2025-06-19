const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese valores separados por espacios: ", function (inputValores) {
  const valores = inputValores.split(" ");

  rl.question("Ingrese valor a buscar: ", function (valorBuscado) {
    if (valores.includes(valorBuscado)) {
      console.log(`El valor ${valorBuscado} se encuentra entre los valores originales.`);
    } else {
      console.log(`El valor ${valorBuscado} NO se encuentra entre los valores originales.`);
    }

    rl.close();
  });
});
