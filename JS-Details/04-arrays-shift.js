let frutasRed = new Array();
let frutasCitricas = ["Limão", "Laranja", "Abacaxi", "Tangerina", "Acerola"];

frutasRed.push("Morango");
frutasRed.push("Maçã");
frutasRed.push("Amora");
frutasRed.push("Cereja");

console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);

let frutaRemovida = frutasCitricas.shift();
console.log(frutasCitricas);
console.log(`${frutaRemovida} foi removido`);

console.log(frutasRed[0]);
console.log(frutasRed[1]);
console.log(frutasRed[2]);
console.log(frutasRed[3]);

frutaRemovida1 = frutasRed.shift();
console.log(frutasRed);
console.log(`${frutaRemovida1} foi removido`);