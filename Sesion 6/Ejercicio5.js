const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese valores separados por espacios: ", function (inputValores) {
  const valores = inputValores.split(" ");

  rl.question("Ingrese valor a buscar: ", function (valorBuscado) {
    const indice = valores.indexOf(valorBuscado);

    if (indice !== -1) {
      console.log(`El valor ${valorBuscado} se encuentra en el índice ${indice}`);
    } else {
      console.log(`El valor ${valorBuscado} no se ha encontrado.`);
    }

    rl.close();
  });
});
