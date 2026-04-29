let frutasRed = new Array();
let frutasCitricas = ["Limão", "Laranja", "Abacaxi", "Tangerina", "Acerola"];

frutasRed.push("Morango");
frutasRed.push("Maçã");
frutasRed.push("Amora");
frutasRed.push("Cereja");

console.log(frutasCitricas);
console.log(frutasRed);
const frutaremovida = frutasRed.pop();
console.log(frutasRed);

console.log(`${frutaremovida} foi removida da cesta de frutas`);