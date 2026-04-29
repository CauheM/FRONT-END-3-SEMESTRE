const hobbies = 
[
    "Jogar bola", 
    "Jogar videogame", 
    "Ouvir música", 
    "comer comida",
    "Fazer Brownie",
    "Cozinhar",
    "Academia"
];

const novosHobbies = hobbies.map((hobby) => {
    return `<p>${hobby}</p>`;
});

console.log(novosHobbies);