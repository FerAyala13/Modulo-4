// Importa el módulo readline para leer la entrada del usuario
const readline = require("readline");

// Crea la interfaz para entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pregunta al usuario que ingrese los números
rl.question("Ingresa números separados por espacios: ", function (input) {
  // Divide la cadena en partes y convierte cada parte en número
  const numeros = input.split(" ").map(Number);

  // Filtra los valores que no son números
  const numerosValidos = numeros.filter(num => !isNaN(num));

  if (numerosValidos.length === 0) {
    console.log("No ingresaste números válidos.");
  } else {
    // Calcula el número menor
    const menor = Math.min(...numerosValidos);
    console.log(`El número menor es: ${menor}`);
  }

  rl.close(); // Cierra la interfaz
});
